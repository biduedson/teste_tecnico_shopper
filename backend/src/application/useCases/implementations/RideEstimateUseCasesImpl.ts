import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { rideEstimateService } from "../../../domain/services/RideEstimateService";
import { ICalculateRideUseRepository } from "../../../infrastructure/database/repositories/contracts/CalculateRideRepository";
import { TravelRequestBodyDto } from "../../dtos/TravelRequestBodyDTO";
import { ITravelEstimateResponse } from "../../interfaces/TravelEstimateResponse";
import { IRideEstimateUseCases } from "../contracts/RideEstimateUseCases";
import { IAddressValidationService } from "../../../domain/services/validation/abstract/AddressValidationService";
import { ITravelRequest } from "../../interfaces/TravelRequest";

export class RideEstimateUseCasesImpl implements IRideEstimateUseCases {
  constructor(
    private readonly _repository: ICalculateRideUseRepository,
    private readonly addresValidationService: IAddressValidationService
  ) {}

  async postRideEstimate(
    body: ITravelRequest
  ): Promise<ITravelEstimateResponse> {
    this.addresValidationService.validateAddress(body.destination, body.origin);

    const travelBody = new TravelRequestBodyDto(
      body.customer_id,
      body.origin,
      body.destination
    );

    await this.addresValidationService.validateUserDto(travelBody);

    const goggleRouteResponse = await this._repository.postRideEstimate(body);

    if (goggleRouteResponse.status === "NOT_FOUND") {
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        "Endereço não encontrado"
      );
    }
    const drivers = await this._repository.getAllDrivers();
    if (!drivers?.length) {
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        "motoristas não encontrados"
      );
    }
    const rideEstimateResponse = rideEstimateService(
      goggleRouteResponse,
      drivers
    );
    return rideEstimateResponse;
  }
}
