import { TravelEntity } from "./TravelEntity";

export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  travels: TravelEntity[]; // Relação com as viagens

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    travels: TravelEntity[] = [] // Inicializa como um array vazio
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.travels = travels;
  }
}
