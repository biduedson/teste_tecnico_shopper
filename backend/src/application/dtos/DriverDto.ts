import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
  IsPositive,
  Min,
} from "class-validator";
import { Type } from "class-transformer";
import { ReviewDTO } from "./ReviewDTO";

export class DriverDTO {
  @IsNumber({}, { message: "O ID do motorista deve ser um número." })
  @IsNotEmpty({ message: "O ID do motorista é obrigatório." })
  id: number;

  @IsString({ message: "O nome do motorista deve ser uma string." })
  @IsNotEmpty({ message: "O nome do motorista é obrigatório." })
  name: string;

  @IsString({ message: "A descrição do motorista deve ser uma string." })
  @IsNotEmpty({ message: "A descrição do motorista é obrigatório." })
  description: string;

  @IsString({ message: "O veículo do motorista deve ser uma string." })
  @IsNotEmpty({ message: "O veículo do motorista é obrigatório." })
  vehicle: string;

  @IsArray({ message: "As avaliações devem ser um array." })
  @ValidateNested({ each: true, message: "Cada avaliação deve ser válida." })
  @Type(() => ReviewDTO)
  @IsOptional()
  review?: ReviewDTO[];

  @IsNumber({}, { message: "A taxa por Km deve ser um número." })
  @IsPositive({ message: "A taxa por Km deve ser positiva." })
  @IsNotEmpty({ message: "A taxa por Km é obrigatória." })
  ratePerKm: number;

  @IsNumber({}, { message: "O mínimo de Km deve ser um número." })
  @Min(1, { message: "O mínimo de Km deve ser pelo menos 1." })
  @IsNotEmpty({ message: "O mínimo de Km do motorista é obrigatório." })
  minKm: number;

  constructor(
    id: number,
    name: string,
    vehicle: string,
    ratePerKm: number,
    description: string,
    minKm?: number,
    review?: ReviewDTO[]
  ) {
    this.id = id;
    this.name = name;
    this.vehicle = vehicle;
    this.ratePerKm = ratePerKm;
    this.minKm = minKm!;
    this.description = description;
    this.review = review;
  }
}
