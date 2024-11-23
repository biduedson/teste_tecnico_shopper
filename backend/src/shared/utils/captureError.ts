import { IHttpResponse } from "../../application/interfaces/HttpResponse";
import { InvalidDataError } from "../../domain/exeptions/InvalidDataError";
import { InvalidMileageError } from "../../domain/exeptions/invalidMileageError";
import { NotFoundError } from "../../domain/exeptions/notFoundError";

export const capTuretypeError = (error: Error): IHttpResponse<any> => {
  if (
    error instanceof InvalidDataError ||
    error instanceof InvalidMileageError ||
    error instanceof NotFoundError
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
