import { InvalidDataError } from "../_exeptions/InvalidDataError";

export const capTuretypeError = (error: Error) => {
  if (error instanceof InvalidDataError) {
    return {
      StatusCode: error.statusCode,
      error_code: error.error_code,
      error_description: error.error_description,
    };
  }
  return {
    StatusCode: 500,
    Descricao: "Erro interno do servidor, ",
    Resposta: error,
  };
};
