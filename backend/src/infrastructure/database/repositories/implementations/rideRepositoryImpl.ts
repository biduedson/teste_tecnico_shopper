import { IDriver } from "../../../../application/interfaces/Driver";
import { IRide } from "../../../../application/interfaces/Ride";
import { ITravelConfirmRequestBody } from "../../../../application/interfaces/TravelConfirmRequestBody";
import { Driver } from "../../../../domain/entities/Driver";
import { DriverModel } from "../../models/DriverModel";
import { ReviewDriverModel } from "../../models/ReviewDriverModel";
import { RideConfirmModel } from "../../models/rideConfirmModel";
import { TravelModel } from "../../models/TravelModel";
import { UserModel } from "../../models/UserModel";

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

  async saveTravel(travel: ITravelConfirmRequestBody): Promise<void> {
    const dataTravel = await TravelModel.create({
      travel,
    });
  }

  async userwhitTravels(customer_id: string): Promise<any> {
    const usertravels = await UserModel.findByPk(customer_id, {
      include: [
        {
          model: TravelModel,
          include: [{ model: DriverModel }, { model: UserModel }], // Inclui os motoristas em cada viagem
        },
      ],
    });
    return usertravels;
  }

  async getDriverFound(id: number): Promise<IDriver | null> {
    const driverFind = await DriverModel.findOne({
      where: { id: id },
    });

    return driverFind;
  }

  async getDriver(id: number): Promise<IDriver | undefined> {
    const driverFind = await DriverModel.findOne({
      where: { id: id },
    });
    if (!driverFind) {
      return undefined;
    }
    const review = await ReviewDriverModel.findOne({
      where: { id: driverFind?.id },
    });
    console.log(review);
    return {
      ...driverFind?.dataValues?.dataValues,
      reviews: review?.dataValues?.dataValues?.reviews,
    };
  }
}
