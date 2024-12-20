export class AppError extends Error {
  public statusCode: number;

  constructor(ststusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = ststusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
