import { IDriver } from "../../../../application/interfaces/Driver";
import { IRide } from "../../../../application/interfaces/Ride";
import { ITravelConfirmRequestBody } from "../../../../application/interfaces/TravelConfirmRequestBody";

export interface IRideRepository {
  saveRide(ride: IRide): Promise<void>;
  getDriver(id: number): Promise<IDriver | undefined>;
  saveTravel(travel: ITravelConfirmRequestBody): Promise<void>;
  userwhitTravels(customer_id: string): Promise<any>;
  getDriverFound(id: number): Promise<IDriver | null>;
}
