export interface Location {
  latitude: number;
  longitude: number;
}

export interface ITravelEstimateResponse {
  origin: Location;
  destination: Location;
  distance: number;
  duration: string;
  options: {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    reviews: {
      rating: number;
      comment: string;
    }[];

    value: number;
  }[];
  routeResponse: object;
}
