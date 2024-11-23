import { Driver } from "../../../../application/interfaces/Driver";
import { IRide } from "../../../../application/interfaces/Ride";
import { drivers } from "../../mockDrivers";
import { RideConfirmModel } from "../../models/RideConfirmModel";

import { IRideRepository } from "../contracts/RideRepository";

export class RideRepositoryImpl implements IRideRepository {
  async saveRide(ride: IRide): Promise<void> {
    const newRide = await RideConfirmModel.create({
      customer_id: ride.customer_id,
      origin: ride.origin,
      destination: ride.destination,
      distance: ride.distance,
      duration: ride.duration,
      value: ride.value,
      driver: ride.driver,
    });
  }

  async getDriver(id: number): Promise<Driver | undefined> {
    const driver = drivers.find((driver) => driver.id === id);
    return driver;
  }
}
