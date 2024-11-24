import { UserDTO } from "../../../../application/dtos/UserDto";

export interface IAddressValidationService {
  normalizaAdrres(address: string): void;
  validateAddress(estination: string, origin: string): void;
  validateUserDto(userDto: UserDTO): Promise<void>;
}
