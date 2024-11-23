import { HttpRequest } from "../../interfaces/HttpRequest";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { IHttpResponseSucces } from "../../interfaces/HttpResponse";
import { IRouteResponse } from "../../interfaces/RideEstimateResponse";
import { User } from "../../interfaces/User";

export interface ICalculateRideUseCases {
  postRideEstimate(user: User): Promise<IRouteResponse>;
}
