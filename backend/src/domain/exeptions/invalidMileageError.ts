export class InvalidMileageError extends Error {
  public readonly statusCode: number;
  public readonly error_code: string;
  public readonly error_description: string;

  constructor(message: string, error_code: string, error_description: string) {
    super(message);
    this.statusCode = 406;
    this.error_code = "INVALID_DISTANCE";
    this.error_description = error_description;
    this.name = "InvalidMileage";
  }
}
