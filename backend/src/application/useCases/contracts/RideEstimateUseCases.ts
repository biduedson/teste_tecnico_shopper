import { ITravelEstimateResponse } from "../../interfaces/TravelEstimateResponse";
import { User } from "../../interfaces/User";

export interface IRideEstimateUseCases {
  postRideEstimate(user: User): Promise<ITravelEstimateResponse>;
}
