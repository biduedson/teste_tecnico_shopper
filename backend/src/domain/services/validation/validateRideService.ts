import { validate } from "class-validator";
import { RideDTO } from "../../../application/dtos/RideConfirmDTO";
import { InvalidDataError } from "../../exeptions/InvalidDataError";

export const validateRideService = async (rideDto: RideDTO) => {
  const rideErrors = await validate(rideDto);

  if (rideErrors.length > 0) {
    rideErrors.map((error) => {
      const FirstError = rideErrors[0];
      const errorMessage = Object.values(FirstError.constraints!)[0];
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        errorMessage
      );
    });
  }
};
