import { IRide } from "../../../../application/interfaces/Ride";
import { IRideUserListRepository } from "../contracts/RideUserListRepository";

import { RideConfirmModel } from "../../models/RideConfirmModel";
import { sortByCreationDate } from "../../../../shared/utils/sortByCreationDate";

export class RideUserlisRepositoryImpl implements IRideUserListRepository {
  async getRiderUserList(
    customer_id: string,
    driverId: number
  ): Promise<IRide[] | []> {
    const riders = await RideConfirmModel.findAll({
      where: { customer_id: customer_id },
    });

    return sortByCreationDate(riders);
  }

  async getRiderUserWhitDriverList(
    customer_id: string,
    driverId: number
  ): Promise<IRide[] | []> {
    const riders = await RideConfirmModel.findAll({
      where: {
        customer_id: customer_id,
        driver: {
          id: driverId,
        },
      },
    });
    return sortByCreationDate(riders);
  }
}
