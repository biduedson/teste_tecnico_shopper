import { IRide } from "../../../../application/interfaces/Ride";

export interface IRideUserListRepository {
  getRiderUserList(
    customer_id: string,
    driverId: number
  ): Promise<IRide[] | []>;
  getRiderUserWhitDriverList(
    customer_id: string,
    driverId: number
  ): Promise<IRide[] | []>;
}
