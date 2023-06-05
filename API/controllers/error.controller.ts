import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
import { STATUS_CODE } from '../types/helper.types';

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(STATUS_CODE.BAD_REQUEST, [{ message, path: [err.path] }]);
};

const handleDuplicateErrorDB = (err: any) => {
  let field = Object.entries(err.keyValue);
  const message = `!موجود مسبقا الرجاء استخدام قيمة اخرى ,${field[0][1]}`;
  return new AppError(STATUS_CODE.BAD_REQUEST, [
    { message, path: [field[0][0]] },
  ]);
};

const handleValidatorErrorDB = (err: any) => {
  const message = Object.values(err.errors).map((el: any) => {
    return { message: el.message, path: [el.path] };
  });

  return new AppError(STATUS_CODE.BAD_REQUEST, message);
};

const handleJWTError = () =>
  new AppError(STATUS_CODE.UNAUTHORIZE, [], 'الرجاء تسجيل الدخول');

const handleJWTExpiredError = () =>
  new AppError(
    STATUS_CODE.UNAUTHORIZE,
    [],
    'انتهت صلاحية الجلسة, الرجاء اعادة تسجيل الدخول'
  );

const handelPassportError = () =>
  new AppError(STATUS_CODE.UNAUTHORIZE, [], 'الرجاء تسجيل الدخول');
let a = [];
const handleZodError = (error: any) => {
  const prodValidationError = error.issues.map((el: any) => {
    return { message: el.message, path: el.path.slice(1) };
  });
  return new AppError(STATUS_CODE.BAD_REQUEST, prodValidationError);
};
//development error
const sendErrorDev = (err: any, req: Request, res: Response) => {
  //A) Api error
  return res.status(err.statusCode).json({
    error: err,
    message: err.message,
    name: err.name,
    stack: err.stack,
  });
};
//B) Rendered Website

//Production error
const sendErrorProd = (err: any, req: Request, res: Response) => {
  // A) Api error

  //Operational, trusted errors:send message to the client
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      type: err.type,
      errors: err.errors,
      message: err?.message,
    });
  } //Programming or other unknown error:don't leak details
  //1) log error
  console.error('Error', err);
  //2) send generic message :don't leak error details
  return res
    .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
    .json({ message: 'حدث خلل في البرنامج' });
};

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //if there is not a statusCode that mean internalServerError 500 and status "error"
  err.statusCode = err.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR;
  if (!isNaN(err.status)) err.statusCode = err.status;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;
    error.name = err.name;
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateErrorDB(error);
    if (error.name === 'ValidationError') error = handleValidatorErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    if (error.name === 'ZodError') error = handleZodError(error);
    if (err.message === 'Unauthorized') error = handelPassportError();

    sendErrorProd(error, req, res);
  }
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
  //req.originalURl mean the route was sent
  return next(
    new AppError(
      STATUS_CODE.NOT_FOUND,
      [],
      `Can't find ${req.originalUrl} on this server`
    )
  ); //skip all middleware and go to the errors handler
};

export { notFound, globalErrorHandler };
