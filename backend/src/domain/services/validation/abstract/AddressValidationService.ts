import { TravelRequestBodyDto } from "../../../../application/dtos/TravelRequestBodyDTO";

export interface IAddressValidationService {
  normalizaAdrres(address: string): void;
  validateAddress(estination: string, origin: string): void;
  validateUserDto(body: TravelRequestBodyDto): Promise<void>;
}
