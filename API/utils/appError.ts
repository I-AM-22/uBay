class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors: any;
  type: string;
  //this class is upgraded error with features like statusCode and status
  //and i made this class to avoid create a new error in each controller to take me to the error handler
  // and rewrite the same error with status and statusCode and make me  process the kind of status automatically
  constructor(
    statusCode: number,
    errors: { message: string; path: string[] }[],
    message?: string
  ) {
    super(message ? message : 'error');
    this.type = errors.length ? 'form' : 'default';
    this.statusCode = statusCode;
    this.isOperational = true;
    this.errors = errors?.length ? errors : undefined;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default AppError;
