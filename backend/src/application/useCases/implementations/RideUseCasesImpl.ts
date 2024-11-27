import { IRideRepository } from "../../../infrastructure/database/repositories/contracts/RideRepository";
import { IRide } from "../../interfaces/Ride";
import { IRideUseCases } from "../contracts/RideUseCases";
import { DriverDTO, RideDTO } from "../../dtos/RideConfirmDTO";
import { InvalidMileageError } from "../../../domain/exeptions/invalidMileageError";
import { NotFoundError } from "../../../domain/exeptions/notFoundError";
import { IValidateRideService } from "../../../domain/services/validation/abstract/ValidateRideService";

export class RideUseCasesImpl implements IRideUseCases {
  constructor(
    private readonly _rideRepository: IRideRepository,
    private readonly _validateRideService: IValidateRideService
  ) {}

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
    await this._validateRideService.validateRide(rideDto);
    await this._validateRideService.validateDrive(driverDTO);

    const driverFound = await this._rideRepository.getDriver(ride.driver.id);

    this._validateRideService.validateDriverFound(driverFound !== undefined);
    this._validateRideService.validateDriverName(
      driverDTO.name,
      driverFound?.name!
    );

    this._validateRideService.validateDriverMinKm(
      driverFound!.minKm!,
      ride.distance
    );

    await this._rideRepository.saveRide(ride);
  }
}
