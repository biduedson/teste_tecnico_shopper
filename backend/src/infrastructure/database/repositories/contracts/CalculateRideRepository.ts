import { IDriver } from "../../../../application/interfaces/Driver";
import { ITravelRequest } from "../../../../application/interfaces/TravelRequest";

export interface ICalculateRideUseRepository {
  postRideEstimate(body: ITravelRequest): Promise<any>;
  getAllDrivers(): Promise<IDriver[] | undefined>;
}
