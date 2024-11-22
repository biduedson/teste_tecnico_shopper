import { IRideDriver } from "../../application/interfaces/RideDriver";

export class RideEntity {
  customer_id: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  driver: {};
  value: number;

  constructor(
    customer_id: string,
    origin: string,
    destination: string,
    distance: number,
    duration: string,
    driver: IRideDriver,
    value: number
  ) {
    this.customer_id = customer_id;
    this.origin = origin;
    this.destination = destination;
    this.distance = distance;
    this.duration = duration;
    this.driver = driver;
    this.value = value;
  }
}
