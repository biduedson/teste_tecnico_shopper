import { validate } from "class-validator";
import { InvalidDataError } from "../../exeptions/InvalidDataError";
import { DriverDTO } from "../../../application/dtos/RideConfirmDTO";

export const validateDriverRideService = async (driveDto: DriverDTO) => {
  const driveErrors = await validate(driveDto);

  if (driveErrors.length > 0) {
    driveErrors.map((error) => {
      const FirstError = driveErrors[0];
      const errorMessage = Object.values(FirstError.constraints!)[0];
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        errorMessage
      );
    });
  }
};
