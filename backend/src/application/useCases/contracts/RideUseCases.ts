import { IRide } from "../../interfaces/Ride";

export interface IRideUseCases {
  saveRide(ride: IRide): Promise<void>;
}
