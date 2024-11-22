import { Driver } from "./Driver";
import { Location } from "./Location";
import { Review } from "./Review";

export interface IRouteResponse {
  origin: Location;
  destination: Location;
  distance: number;
  duration: string;
  options: {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    review: Review;
    value: number;
  }[];
  routeResponse: object;
}
