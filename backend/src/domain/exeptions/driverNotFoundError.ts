export class DriverNotFoundError extends Error {
  public readonly statusCode: number;
  public readonly error_code: string;
  public readonly error_description: string;

  constructor(message: string, error_code: string, error_description: string) {
    super(message);
    this.statusCode = 404;
    this.error_code = "DRIVER_NOT_FOUND";
    this.error_description = error_description;
    this.name = "DriverNotFoundError";
  }
}
