import { validate } from "class-validator";
import { InvalidDataError } from "../../exeptions/InvalidDataError";
import { IAddressValidationService } from "./abstract/AddressValidationService";
import { ITravelRequest } from "../../../application/interfaces/TravelRequest";

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

  async validateUserDto(body: ITravelRequest): Promise<void> {
    const errors = await validate(body);
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
