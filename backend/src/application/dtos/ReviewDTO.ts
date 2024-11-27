import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsPositive,
  Min,
} from "class-validator";

export class ReviewDTO {
  @IsNumber({}, { message: "A nota deve ser um número." })
  @IsPositive({ message: "A nota deve ser positiva." })
  rating: number;

  @IsString({ message: "O comentário deve ser uma string." })
  @IsNotEmpty({ message: "O comentário não pode estar vazio." })
  comment: string;

  constructor(rating: number, comment: string) {
    this.rating = rating;
    this.comment = comment;
  }
}
