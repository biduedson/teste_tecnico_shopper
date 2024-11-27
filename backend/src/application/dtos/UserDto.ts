import {
  IsNumber,
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  IsObject,
} from "class-validator";

export class UserDTO {
  @IsNumber({}, { message: "O ID do usuário deve ser um número." })
  id: number;

  @IsString({ message: "O nome do usuário deve ser uma string." })
  name: string;

  @IsEmail({}, { message: "O email deve ser válido." })
  email: string;

  @IsArray({ message: "As viagens devem ser um array." })
  @IsOptional()
  @IsObject({ each: true, message: "Cada viagem deve ser um objeto válido." })
  travels?: object[];

  constructor(id: number, name: string, email: string, travels?: object[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.travels = travels;
  }
}
