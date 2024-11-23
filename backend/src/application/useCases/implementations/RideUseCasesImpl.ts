import { validate } from "class-validator";
import { IRideRepository } from "../../../infrastructure/database/repositories/contracts/RideRepository";
import { IRide } from "../../interfaces/Ride";
import { IRideUseCases } from "../contracts/RideUseCases";
import { DriverDTO, RideDTO } from "../../dtos/RideConfirmDTO";
import { InvalidDataError } from "../../../domain/exeptions/InvalidDataError";
import { validateRideService } from "../../../domain/services/validation/validateRideService";
import { validateDriverRideService } from "../../../domain/services/validation/validateDriverRideService";
import { DriverNotFoundError } from "../../../domain/exeptions/driverNotFoundError";
import { InvalidMileageError } from "../../../domain/exeptions/invalidMileageError";

export class RideUseCasesImpl implements IRideUseCases {
  constructor(private readonly _rideRepository: IRideRepository) {}

  async saveRide(ride: IRide): Promise<void> {
    const driverDTO = new DriverDTO(ride.driver.id, ride.driver.name);
    const rideDto = new RideDTO(
      ride.customer_id,
      ride.origin,
      ride.destination,
      ride.distance,
      ride.duration,
      ride.value,
      ride.driver
    );
    await validateRideService(rideDto);
    await validateDriverRideService(driverDTO);

    const driverFound = await this._rideRepository.getDriver(ride.driver.id);
    if (!driverFound) {
      throw new DriverNotFoundError(
        "Motorista não encontrado",
        "DRIVER_NOT_FOUND",
        "Motorista não esta cadastrado."
      );
    }

    if (driverFound.minKm! > ride.distance) {
      throw new InvalidMileageError(
        "Quilometragem inválida para o motorista",
        "INVALID_DISTANCE",
        "A quilometragem informada é menor que a quilometragem mínima doo motorista"
      );
    }

    await this._rideRepository.saveRide(ride);
  }
}
