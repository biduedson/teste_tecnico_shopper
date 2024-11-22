import { HttpResponse } from "../../../application/interfaces/HttpResponse";
import { IHttpResponseSucces } from "../../../application/interfaces/httpResponseSucess";
import { IRouteResponse } from "../../../application/interfaces/RideEstimateResponse";
import { User } from "../../../application/interfaces/User";
import { ICalculateRideUseCases } from "../../../application/useCases/contracts/CalculateRideUseCases";
import { capTuretypeError } from "../../../shared/utils/captureError";

export class EstimateRideRouteController {
  constructor(
    private readonly _calculateRideUseCases: ICalculateRideUseCases
  ) {}
  async postRideEstimate(
    user: User
  ): Promise<IHttpResponseSucces<IRouteResponse>> {
    try {
      const routeResponse = await this._calculateRideUseCases.postRideEstimate(
        user
      );

      return {
        StatusCode: 200,
        Descricao: "Operação realizada com sucesso.",
        Resposta: routeResponse,
      };
    } catch (error) {
      const { StatusCode, Descricao, Resposta } = capTuretypeError(
        error as Error
      );
      return {
        StatusCode: StatusCode,
        Descricao: Descricao,
        Resposta: Resposta,
      };
    }
  }
}
