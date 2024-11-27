import axios from "axios";
import { ICalculateRideUseRepository } from "../contracts/CalculateRideRepository";
import { GOOGLE_API_KEY } from "../../../../app";
import { IDriver } from "../../../../application/interfaces/Driver";
import { DriverModel } from "../../models/DriverModel";
import { ReviewDriverModel } from "../../models/ReviewDriverModel";
import { ITravelRequest } from "../../../../application/interfaces/TravelRequest";

export class CalculateRideRepositoryImpl
  implements ICalculateRideUseRepository
{
  async postRideEstimate(body: ITravelRequest): Promise<any> {
    const { origin, destination } = body;

    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/directions/json",
      {
        params: {
          origin,
          destination,
          key: GOOGLE_API_KEY,
        },
      }
    );
    return response.data;
  }

  async getAllDrivers(): Promise<IDriver[] | undefined> {
    const dataDrivers = await DriverModel.findAll();

    const drivers = await Promise.all(
      dataDrivers.map(async (driver) => {
        const review = await ReviewDriverModel.findOne({
          where: { id: driver.id },
        });

        return {
          ...driver.dataValues,
          reviews: {
            rating: review!.rating,
            comment: review!.comment,
          },
        };
      })
    );
    return drivers;
  }
}
