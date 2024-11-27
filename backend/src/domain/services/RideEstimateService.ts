import { IDriver } from "../../application/interfaces/Driver";
import { ITravelEstimateResponse } from "../../application/interfaces/TravelEstimateResponse";

export const rideEstimateService = (
  goggleRouteResponse: any,
  drivers: IDriver[]
): ITravelEstimateResponse => {
  const data: ITravelEstimateResponse = {
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
          ...driver,

          value:
            driver.ratePerKm! *
            (goggleRouteResponse.routes[0].legs[0].distance.value / 1000),
        };
      })
      .sort((a, b) => a.value - b.value),
    routeResponse: goggleRouteResponse,
  };
  return data;
};
