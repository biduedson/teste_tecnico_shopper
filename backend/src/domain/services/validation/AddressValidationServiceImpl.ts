import { validate } from "class-validator";
import { UserDTO } from "../../../application/dtos/UserDto";
import { InvalidDataError } from "../../exeptions/InvalidDataError";
import { IAddressValidationService } from "./abstract/AddressValidationService";

export class AddressValidationService implements IAddressValidationService {
  normalizaAdrres(address: string) {
    return address.trim().replace(/\s+/g, " ").toLowerCase();
  }

  validateAddress(destination: string, origin: string): void {
    const normalizedDestination = this.normalizaAdrres(destination);
    const normalizedOrigin = this.normalizaAdrres(origin);
    if (normalizedOrigin === normalizedDestination) {
      throw new InvalidDataError(
        "Os dados fornecidos no corpo da requisição são inválidos",
        "INVALID_DATA",
        "A origem e o destino não podem ser iguais."
      );
    }
  }

  async validateUserDto(userDto: UserDTO): Promise<void> {
    const errors = await validate(userDto);
    if (errors.length > 0) {
      errors.map((error) => {
        const FirstError = errors[0];
        const errorMessage = Object.values(FirstError.constraints!)[0];
        throw new InvalidDataError(
          "Os dados fornecidos no corpo da requisição são inválidos",
          "INVALID_DATA",
          errorMessage
        );
      });
    }
  }
}
