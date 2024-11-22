import { IRouteResponse } from "../../../../application/interfaces/RideEstimateResponse";
import { User } from "../../../../application/interfaces/User";

export interface ICalculateRideUseRepository {
  postRideEstimate(user: User): Promise<any>;
}
