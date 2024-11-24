import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsObject,
  ValidateNested,
} from "class-validator";

export class DriverDTO {
  @IsNumber({}, { message: "id do motorista deve ser um número." })
  @IsNotEmpty({ message: "id do motorista é obrigatório" })
  id: number;

  @IsString({ message: "nome do motorista deve ser uma string." })
  @IsNotEmpty({ message: "nome do motorista é obrigatório" })
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class RideDTO {
  @IsString({ message: "id do usuario deve ser uma string." })
  @IsNotEmpty({ message: "id do usuario é obrigatório" })
  customer_id: string;

  @IsString({ message: "origem deve ser uma string." })
  @IsNotEmpty({ message: "origem é obrigatório" })
  origin: string;

  @IsString({ message: "destino deve ser uma string." })
  @IsNotEmpty({ message: "destinno é obrigatório" })
  destination: string;

  @IsNumber({}, { message: "distancia deve ser um número." })
  @IsNotEmpty({ message: "distancia é obrigatório" })
  distance: number;

  @IsString({ message: "duração deve ser uma string." })
  @IsNotEmpty({ message: "duração é obrigatório" })
  duration: string;

  @IsNumber({}, { message: "valor deve ser um número." })
  @IsNotEmpty({ message: "valor é obrigatório" })
  value: number;

  @ValidateNested()
  @IsObject({ message: "driver deve ser um objeto." })
  driver: DriverDTO;

  constructor(
    customer_id: string,
    origin: string,
    destination: string,
    distance: number,
    duration: string,
    value: number,
    driver: DriverDTO
  ) {
    this.customer_id = customer_id;
    this.origin = origin;
    this.destination = destination;
    this.distance = distance;
    this.duration = duration;
    this.value = value;
    this.driver = driver;
  }
}
