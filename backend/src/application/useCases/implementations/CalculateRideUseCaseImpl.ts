import { validate } from "class-validator";
import { BadRequestError } from "../../../domain/exeptions/BadRequestError";
import { rideEstimateService } from "../../../domain/services/RideEstimateService";
import { ICalculateRideUseRepository } from "../../../infrastructure/database/repositories/contracts/CalculateRideRepository";
import { UserDTO } from "../../dtos/UserDto";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { IRouteResponse } from "../../interfaces/RideEstimateResponse";
import { User } from "../../interfaces/User";
import { ICalculateRideUseCases } from "../contracts/CalculateRideUseCases";

export class CalculateRideUseCaseImpl implements ICalculateRideUseCases {
  constructor(private readonly _repository: ICalculateRideUseRepository) {}

  async postRideEstimate(user: User): Promise<HttpResponse<IRouteResponse>> {
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
        throw new BadRequestError(errorMessage);
      });
    }

    const goggleRouteResponse = await this._repository.postRideEstimate(user);
    const rideEstimateResponse = rideEstimateService(goggleRouteResponse);

    return {
      statusCode: 200,
      body: rideEstimateResponse,
    };
  }
}
