import { DriverWithCost } from "./DriverWithCost";

export interface CalculateRouteResponse {
  origin: string;
  destination: string;
  distanceKm: number;
  drivers: DriverWithCost[];
}
