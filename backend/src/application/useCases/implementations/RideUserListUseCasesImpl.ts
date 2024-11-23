import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { NotFoundError } from "../../../domain/exeptions/notFoundError";
import { IRideUserListRepository } from "../../../infrastructure/database/repositories/contracts/RideUserListRepository";
import { sortByCreationDate } from "../../../shared/utils/sortByCreationDate";
import { IRide } from "../../interfaces/Ride";
import { IRideUserListUseCases } from "../contracts/RideUserListUseCases";

export class RideUserListUseCasesImpl implements IRideUserListUseCases {
  constructor(
    public readonly _rideUserListRepository: IRideUserListRepository
  ) {}

  async getRideUserList(
    customer_id: string,
    driverId: number
  ): Promise<IRide[] | []> {
    if (!customer_id) {
      console.log("Aqui");
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        "O id do usuario é obrigatorio"
      );
    }
    const rideUserList = await this._rideUserListRepository.getRiderUserList(
      customer_id,
      driverId
    );

    if (rideUserList.length === 0) {
      throw new NotFoundError(
        "Nenhum registro encontrado",
        "NO_RIDES_FOUND",
        "Nenhum registro encontrado  verifique  o id do usuario."
      );
    }
    if (driverId) {
      const riderListDriver =
        await this._rideUserListRepository.getRiderUserWhitDriverList(
          customer_id,
          driverId
        );
      if (riderListDriver.length === 0) {
        throw new NotFoundError(
          "Nenhum registro encontrado",
          "NO_RIDES_FOUND",
          "Nenhum registro encontrado  verifique  o id do motorista."
        );
      }
      return sortByCreationDate(riderListDriver);
    }
    return sortByCreationDate(rideUserList);
  }
}
