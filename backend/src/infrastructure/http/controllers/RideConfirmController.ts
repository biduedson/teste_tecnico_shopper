import { IHttpResponseSucces } from "../../../application/interfaces/httpResponseSucess";
import { IRide } from "../../../application/interfaces/Ride";
import { IRideUseCases } from "../../../application/useCases/contracts/RideUseCases";
import { capTuretypeError } from "../../../shared/utils/captureError";

export class RideConfirmController {
  constructor(private readonly _rideUseCases: IRideUseCases) {}
  async saveRide(ride: IRide): Promise<IHttpResponseSucces<any>> {
    try {
      await this._rideUseCases.saveRide(ride);
      return {
        StatusCode: 200,
        Descricao: "Operação realizada com sucesso",
        Resposta: { sucess: true },
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
