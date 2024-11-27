import { IHttpResponse } from "../../../application/interfaces/HttpResponse";
import { ITravelEstimateResponse } from "../../../application/interfaces/TravelEstimateResponse";
import { ITravelRequestBody } from "../../../application/interfaces/TravelRequestBody";
import { IRideEstimateUseCases } from "../../../application/useCases/contracts/RideEstimateUseCases";
import { capTuretypeError } from "../../../shared/utils/captureError";

export class RideEstimateRouteController {
  constructor(private readonly _calculateRideUseCases: IRideEstimateUseCases) {}
  async postRideEstimate(
    body: ITravelRequestBody
  ): Promise<IHttpResponse<ITravelEstimateResponse>> {
    try {
      const routeResponse = await this._calculateRideUseCases.postRideEstimate(
        body
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
