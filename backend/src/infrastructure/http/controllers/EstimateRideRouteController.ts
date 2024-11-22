import { HttpResponse } from "../../../application/interfaces/HttpResponse";
import { IRouteResponse } from "../../../application/interfaces/RideEstimateResponse";
import { User } from "../../../application/interfaces/User";
import { ICalculateRideUseCases } from "../../../application/useCases/contracts/CalculateRideUseCases";
import { capTuretypeError } from "../../../shared/utils/captureError";

export class EstimateRideRouteController {
  constructor(
    private readonly _calculateRideUseCases: ICalculateRideUseCases
  ) {}
  async postRideEstimate(user: User): Promise<HttpResponse<IRouteResponse>> {
    try {
      const routeResponse = await this._calculateRideUseCases.postRideEstimate(
        user
      );

      return {
        statusCode: 200,
        body: routeResponse.body,
      };
    } catch (error) {
      console.log(error);
      const { body, statusCode } = capTuretypeError(error as Error);
      return {
        statusCode: statusCode,
        body: body,
      };
    }
  }
}
