import { HttpResponse } from "../../application/interfaces/HttpResponse";
import { BadRequestError } from "../../domain/exeptions/BadRequestError";

export const capTuretypeError = (error: Error): HttpResponse<any> => {
  if (error instanceof BadRequestError) {
    return { statusCode: error.statusCode, body: error.message };
  }
  return { statusCode: 500, body: "Erro interno do servidor, " + error };
};
