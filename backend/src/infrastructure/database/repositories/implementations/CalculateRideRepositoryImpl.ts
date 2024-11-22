import axios from "axios";
import { IRouteResponse } from "../../../../application/interfaces/RideEstimateResponse";
import { User } from "../../../../application/interfaces/User";
import { ICalculateRideUseRepository } from "../contracts/CalculateRideRepository";
import { GOOGLE_API_KEY } from "../../../../app";

export class CalculateRideRepositoryImpl
  implements ICalculateRideUseRepository
{
  async postRideEstimate(user: User): Promise<any> {
    const { origin, destination } = user;

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
}
