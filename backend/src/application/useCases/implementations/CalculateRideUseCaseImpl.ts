import { validate } from "class-validator";
import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { rideEstimateService } from "../../../domain/services/RideEstimateService";
import { ICalculateRideUseRepository } from "../../../infrastructure/database/repositories/contracts/CalculateRideRepository";
import { UserDTO } from "../../dtos/UserDto";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { IRouteResponse } from "../../interfaces/RideEstimateResponse";
import { User } from "../../interfaces/User";
import { ICalculateRideUseCases } from "../contracts/CalculateRideUseCases";
import { IHttpResponseSucces } from "../../interfaces/httpResponseSucess";

export class CalculateRideUseCaseImpl implements ICalculateRideUseCases {
  constructor(private readonly _repository: ICalculateRideUseRepository) {}

  async postRideEstimate(user: User): Promise<IRouteResponse> {
    const userDto = new UserDTO(
      user.customer_id,
      user.origin,
      user.destination
    );
    const errors = await validate(userDto);

    if (errors.length > 0) {
      errors.map((error) => {
        const FirstError = errors[0];
        const errorMessage = Object.values(FirstError.constraints!)[0];
        throw new InvalidDataError(
          "Os dados fornecidos no corpo da requisição são inválidos",
          "INVALID_DATA",
          errorMessage
        );
      });
    }

    const goggleRouteResponse = await this._repository.postRideEstimate(user);
    const rideEstimateResponse = rideEstimateService(goggleRouteResponse);

    return rideEstimateResponse;
  }
}
