import { Driver } from "../../../../application/interfaces/Driver";
import { IRide } from "../../../../application/interfaces/Ride";

export interface IRideRepository {
  saveRide(ride: IRide): Promise<void>;
  getDriver(id: number): Promise<Driver | undefined>;
}