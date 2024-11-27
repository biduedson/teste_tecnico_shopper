import { IDriver } from "../../application/interfaces/Driver";

export class Driver implements IDriver {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  review: {
    rating: number;
    comment: string;
  };
  ratePerKm: number;
  minKm: number;

  constructor(
    id: number,
    name: string,
    description: string,
    vehicle: string,
    review: {
      rating: number;
      comment: string;
    },
    ratePerKm: number,
    minKm: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.vehicle = vehicle;
    this.review = review;
    this.ratePerKm = ratePerKm;
    this.minKm = minKm;
  }
}
