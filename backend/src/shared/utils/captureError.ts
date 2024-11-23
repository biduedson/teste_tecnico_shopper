import { IHttpResponse } from "../../application/interfaces/HttpResponse";
import { DriverNotFoundError } from "../../domain/exeptions/driverNotFoundError";
import { InvalidDataError } from "../../domain/exeptions/InvalidDataError";
import { InvalidMileageError } from "../../domain/exeptions/invalidMileageError";

export const capTuretypeError = (error: Error): IHttpResponse<any> => {
  if (
    error instanceof InvalidDataError ||
    error instanceof DriverNotFoundError ||
    error instanceof InvalidMileageError
  ) {
    return {
      StatusCode: error.statusCode,
      Descricao: error.message,
      Resposta: {
        error_code: error.error_code,
        error_description: error.error_description,
      },
    };
  }
  return {
    StatusCode: 500,
    Descricao: "Erro interno do servidor, ",
    Resposta: error,
  };
};
