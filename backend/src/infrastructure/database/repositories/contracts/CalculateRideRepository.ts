import { Driver } from "../../../../application/interfaces/Driver";
import { IRouteResponse } from "../../../../application/interfaces/TravelEstimateResponse";
import { User } from "../../../../application/interfaces/User";

export interface ICalculateRideUseRepository {
  postRideEstimate(user: User): Promise<any>;
  getAllDrivers(): Promise<Driver[] | undefined>;
}
