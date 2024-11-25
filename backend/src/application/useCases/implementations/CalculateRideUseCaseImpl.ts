import { validate } from "class-validator";
import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { rideEstimateService } from "../../../domain/services/RideEstimateService";
import { ICalculateRideUseRepository } from "../../../infrastructure/database/repositories/contracts/CalculateRideRepository";
import { UserDTO } from "../../dtos/UserDto";
import { IRouteResponse } from "../../interfaces/RideEstimateResponse";
import { User } from "../../interfaces/User";
import { ICalculateRideUseCases } from "../contracts/CalculateRideUseCases";
import { IAddressValidationService } from "../../../domain/services/validation/abstract/AddressValidationService";

export class CalculateRideUseCaseImpl implements ICalculateRideUseCases {
  constructor(
    private readonly _repository: ICalculateRideUseRepository,
    private readonly addresValidationService: IAddressValidationService
  ) {}

  async postRideEstimate(user: User): Promise<IRouteResponse> {
    this.addresValidationService.validateAddress(user.destination, user.origin);

    const userDto = new UserDTO(
      user.customer_id,
      user.origin,
      user.destination
    );

    await this.addresValidationService.validateUserDto(userDto);

    const goggleRouteResponse = await this._repository.postRideEstimate(user);

    if (goggleRouteResponse.status === "NOT_FOUND") {
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        "Endereço não encontrado"
      );
    }
    const rideEstimateResponse = rideEstimateService(goggleRouteResponse);

    return rideEstimateResponse;
  }
}
