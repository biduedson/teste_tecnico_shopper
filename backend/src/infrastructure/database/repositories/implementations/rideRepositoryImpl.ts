import { IDriver } from "../../../../application/interfaces/Driver";
import { IRide } from "../../../../application/interfaces/Ride";
import { Driver } from "../../../../domain/entities/Driver";
import { DriverModel } from "../../models/DriverModel";
import { ReviewDriverModel } from "../../models/ReviewDriverModel";
import { RideConfirmModel } from "../../models/rideConfirmModel";

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

  async getDriver(id: number): Promise<IDriver | undefined> {
    const driverFind = await DriverModel.findOne({
      where: { id: id },
    });
    if (!driverFind) {
      return undefined;
    }
    console.log(driverFind);
    const review = await ReviewDriverModel.findOne({
      where: { id: driverFind?.id },
    });

    return {
      ...driverFind?.dataValues?.dataValues,
      reviews: review?.dataValues?.dataValues?.reviews,
    };
  }
}
