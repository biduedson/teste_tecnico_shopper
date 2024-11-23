import { IRide } from "../../interfaces/Ride";

export interface IRideUserListUseCases {
  getRideUserList(customer_id: string, driverId: number): Promise<IRide[] | []>;
}
