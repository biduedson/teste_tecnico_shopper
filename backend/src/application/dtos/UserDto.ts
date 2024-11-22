import { IsNegative, IsNotEmpty, IsString } from "class-validator";

export class UserDTO {
  @IsString({ message: "customer_id deve ser uma string." })
  @IsNotEmpty({ message: "custumer_id  é obrigatório" })
  customer_id: string;

  @IsString({ message: "origin deve ser uma string." })
  @IsNotEmpty({ message: "origin  é obrigatório" })
  origin: string;

  @IsString({ message: "destination deve ser uma string." })
  @IsNotEmpty({ message: "destination  é obrigatório" })
  destination: string;

  constructor(customer_id: string, origin: string, destination: string) {
    this.customer_id = customer_id;
    this.origin = origin;
    this.destination = destination;
  }
}
