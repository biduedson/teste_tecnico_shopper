import { Driver } from "../../application/interfaces/Driver";

export class DriverEntity implements Driver {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public vehicle: string,
    public review: {
      rating: number;
      comment: string;
    },
    public ratePerKm?: number,
    public minKm?: number
  ) {}

  getName(): string {
    return this.name;
  }

  getRating(): number {
    return this.review.rating;
  }
  calculateCoast(distanceKm: number): string | void {
    if (distanceKm) {
      return (distanceKm * this.ratePerKm!).toFixed(2);
    }
  }
}
