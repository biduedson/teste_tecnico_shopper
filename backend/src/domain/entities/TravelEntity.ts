export class TravelEntity {
  id: number;
  customer_id: number; // Referência ao ID do usuário
  date: Date;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
  driver: {
    id: number;
    name: string;
  };

  constructor(
    id: number,
    customer_id: number,
    date: Date,
    origin: string,
    destination: string,
    distance: number,
    duration: string,
    value: number,
    driver: { id: number; name: string }
  ) {
    this.id = id;
    this.customer_id = customer_id;
    this.date = date;
    this.origin = origin;
    this.destination = destination;
    this.distance = distance;
    this.duration = duration;
    this.value = value;
    this.driver = driver;
  }
}
