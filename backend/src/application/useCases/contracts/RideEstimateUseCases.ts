import { ITravelEstimateResponse } from "../../interfaces/TravelEstimateResponse";
import { ITravelRequest } from "../../interfaces/TravelRequest";

export interface IRideEstimateUseCases {
  postRideEstimate(body: ITravelRequest): Promise<ITravelEstimateResponse>;
}
