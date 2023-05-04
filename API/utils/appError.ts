class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;
  //this class is upgraded error with features like statusCode and status
  //and i made this class to avoid create a new error in each controller to take me to the error handler
  // and rewrite the same error with status and statusCode and make me  process the kind of status automatically
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default AppError;
