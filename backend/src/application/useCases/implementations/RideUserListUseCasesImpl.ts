import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { IRideUserListRepository } from "../../../infrastructure/database/repositories/contracts/RideUserListRepository";
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
    const rideUserList = await this._rideUserListRepository.getRiderUserList(
      customer_id,
      driverId
    );
    if (driverId) {
      const riderListDriver =
        await this._rideUserListRepository.getRiderUserWhitDriverList(
          customer_id,
          driverId
        );
      return riderListDriver;
    }
    return rideUserList;
  }
}
