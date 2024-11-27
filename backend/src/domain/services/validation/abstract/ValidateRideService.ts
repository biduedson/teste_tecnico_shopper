import {
  DriverDTO,
  RideDTO,
} from "../../../../application/dtos/RideConfirmDTO";

export interface IValidateRideService {
  validateRide(rideDto: RideDTO): Promise<void>;
  validateDrive(driveDto: DriverDTO): Promise<void>;
  validateDriverFound(driver: boolean): void;
  validateDriverMinKm(minKm: number, distance: number): void;
  validateDriverName(requestDriverName: string, driverNameFound: string): void;
}
