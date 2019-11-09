export default class ApiError extends Error {
  status: number;

  validation: object;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;
  }
}
