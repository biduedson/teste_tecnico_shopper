import { TravelEntity } from "./TravelEntity";

export class UserEntity {
  id: number;
  name: string;

  travels: TravelEntity[]; // Relação com as viagens

  constructor(id: number, name: string, travels: TravelEntity[] = []) {
    this.id = id;
    this.name = name;
    this.travels = travels;
  }
}
