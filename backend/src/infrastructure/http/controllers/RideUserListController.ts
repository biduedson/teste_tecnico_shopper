import { HttpRequest } from "../../../application/interfaces/HttpRequest";
import { IHttpResponse } from "../../../application/interfaces/HttpResponse";
import { IRide } from "../../../application/interfaces/Ride";
import { IRideUserListUseCases } from "../../../application/useCases/contracts/RideUserListUseCases";

export class RideUserListController {
  constructor(private readonly _rideUserListUseCases: IRideUserListUseCases) {}
  async getRideUserList(
    httpRequest: HttpRequest<{ params: string; query: any }>
  ): Promise<IHttpResponse<IRide[]>> {
    const rideUserList = await this._rideUserListUseCases.getRideUserList(
      httpRequest.params,
      httpRequest.query
    );

    return {
      StatusCode: 200,
      Descricao: "Operação realizada comsucesso",
      Resposta: rideUserList,
    };
  }
}
