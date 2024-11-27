import { validate } from "class-validator";
import { DriverDTO, RideDTO } from "../../../application/dtos/RideConfirmDTO";
import { InvalidDataError } from "../../exeptions/InvalidDataError";
import { IValidateRideService } from "./abstract/ValidateRideService";
import { NotFoundError } from "../../exeptions/notFoundError";
import { InvalidMileageError } from "../../exeptions/invalidMileageError";

export class ValidateRideServiceImpl implements IValidateRideService {
  async validateRide(rideDto: RideDTO): Promise<void> {
    const rideErrors = await validate(rideDto);

    if (rideErrors.length > 0) {
      const firstError = rideErrors[0];
      const errorMessage = Object.values(firstError.constraints!)[0];
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        errorMessage
      );
    }
  }
  async validateDrive(driveDto: DriverDTO): Promise<void> {
    const driveErrors = await validate(driveDto);

    if (driveErrors.length > 0) {
      const firstError = driveErrors[0];
      const errorMessage = Object.values(firstError.constraints!)[0];
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        errorMessage
      );
    }
  }

  validateDriverName(requestDriverName: string, driverNameFound: string): void {
    console.log(requestDriverName, driverNameFound);
    if (requestDriverName !== driverNameFound) {
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        "O nome do motorista  não correspondo ai id informado ."
      );
    }
  }

  validateDriverFound(driver: boolean): void {
    if (!driver) {
      throw new NotFoundError(
        "Motorista não encontrado",
        "DRIVER_NOT_FOUND",
        "Motorista não encontrado."
      );
    }
  }
  validateDriverMinKm(minKm: number, distance: number): void {
    if (minKm! > distance) {
      throw new InvalidMileageError(
        "Quilometragem inválida para o motorista",
        "INVALID_DISTANCE",
        "A quilometragem informada é menor que a quilometragem mínima do motorista"
      );
    }
  }
}
