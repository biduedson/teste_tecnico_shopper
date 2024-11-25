import { IRouteResponse } from "../../interfaces/RideEstimateResponse";
import { User } from "../../interfaces/User";

export interface ICalculateRideUseCases {
  postRideEstimate(user: User): Promise<IRouteResponse>;
}
