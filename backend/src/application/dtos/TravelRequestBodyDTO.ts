import { IsNegative, IsNotEmpty, IsString } from "class-validator";

export class TravelRequestBodyDto {
  @IsString({ message: "customer_id deve ser uma string." })
  @IsNotEmpty({ message: "id do usuario é obrigatório" })
  customer_id: string;

  @IsString({ message: "origin deve ser uma string." })
  @IsNotEmpty({ message: "origin  é obrigatório" })
  origin: string;

  @IsString({ message: "destino deve ser uma string." })
  @IsNotEmpty({ message: "destino  é obrigatório" })
  destination: string;

  constructor(customer_id: string, origin: string, destination: string) {
    this.customer_id = customer_id;
    this.origin = origin;
    this.destination = destination;
  }
}
