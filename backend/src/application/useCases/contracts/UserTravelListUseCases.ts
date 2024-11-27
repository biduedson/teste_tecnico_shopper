import { IRide } from "../../interfaces/Ride";

export interface IUserTravelListUseCases {
  getRideUserList(customer_id: string, driverId: number): Promise<IRide[] | []>;
}
