import { IRouteResponse } from "../../application/interfaces/RideEstimateResponse";
import { drivers } from "../../infrastructure/database/mockDrivers";

export const rideEstimateService = (
  goggleRouteResponse: any
): IRouteResponse => {
  drivers.map((driver) => {
    return {
      id: driver.id,
      name: driver.name,
      description: driver.description,
      vehicle: driver.vehicle,
      review: driver.review,
      value:
        driver.ratePerKm! *
        goggleRouteResponse.routes[0].legs[0].distance.value.toFixed(2),
    };
  });

  const data: IRouteResponse = {
    origin: {
      latitude: goggleRouteResponse.routes[0].legs[0].start_location.lat,
      longitude: goggleRouteResponse.routes[0].legs[0].start_location.lng,
    },
    destination: {
      latitude: goggleRouteResponse.routes[0].legs[0].end_location.lat,
      longitude: goggleRouteResponse.routes[0].legs[0].end_location.lng,
    },
    distance: goggleRouteResponse.routes[0].legs[0].distance.value,
    duration: goggleRouteResponse.routes[0].legs[0].duration.value,
    options: drivers
      .map((driver) => {
        return {
          id: driver.id,
          name: driver.name,
          description: driver.description,
          vehicle: driver.vehicle,
          review: driver.review,
          value:
            driver.ratePerKm! *
            goggleRouteResponse.routes[0].legs[0].distance.value.toFixed(2),
        };
      })
      .sort((a, b) => a.value - b.value),
    routeResponse: goggleRouteResponse,
  };
  return data;
};
