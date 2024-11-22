export class InvalidDataError extends Error {
  public readonly statusCode: number;
  public readonly error_code: string;
  public readonly error_description: string;

  constructor(message: string, error_code: string, error_description: string) {
    super(message);
    this.statusCode = 400;
    this.error_code = "INVALID_DATA";
    this.error_description = error_description;
    this.name = "BadRequestError";
  }
}
