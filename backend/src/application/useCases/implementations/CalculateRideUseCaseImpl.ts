import { BadRequestError } from "../../../domain/exeptions/BadRequestError";
import { rideEstimateService } from "../../../domain/services/RideEstimateService";
import { ICalculateRideUseRepository } from "../../../infrastructure/database/repositories/contracts/CalculateRideRepository";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { IRouteResponse } from "../../interfaces/RideEstimateResponse";
import { User } from "../../interfaces/User";
import { ICalculateRideUseCases } from "../contracts/CalculateRideUseCases";

export class CalculateRideUseCaseImpl implements ICalculateRideUseCases {
  constructor(private readonly _repository: ICalculateRideUseRepository) {}

  async postRideEstimate(user: User): Promise<HttpResponse<IRouteResponse>> {
    if (!user.customer_id) {
      throw new BadRequestError("custumer_id  é obrigatório");
    }
    const goggleRouteResponse = await this._repository.postRideEstimate(user);
    const rideEstimateResponse = rideEstimateService(goggleRouteResponse);

    return {
      statusCode: 200,
      body: rideEstimateResponse,
    };
  }
}
