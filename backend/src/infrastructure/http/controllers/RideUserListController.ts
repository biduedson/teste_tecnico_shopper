import { HttpRequest } from "../../../application/interfaces/HttpRequest";
import { IHttpResponse } from "../../../application/interfaces/HttpResponse";
import { IRide } from "../../../application/interfaces/Ride";
import { IRideUserListUseCases } from "../../../application/useCases/contracts/RideUserListUseCases";
import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { capTuretypeError } from "../../../shared/utils/captureError";

export class RideUserListController {
  constructor(private readonly _rideUserListUseCases: IRideUserListUseCases) {}
  async getRideUserList(
    httpRequest: HttpRequest<{ params: string; query: any }>
  ): Promise<IHttpResponse<IRide[]>> {
    const { customer_id } = httpRequest.params;
    const { driverId } = httpRequest.query;

    try {
      const rideUserList = await this._rideUserListUseCases.getRideUserList(
        String(customer_id),
        Number(driverId)
      );

      return {
        StatusCode: 200,
        Descricao: "Operação realizada comsucesso",
        Resposta: rideUserList,
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
