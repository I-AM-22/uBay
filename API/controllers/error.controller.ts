import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(400, message);
};

const handleDuplicateErrorDB = (err: any) => {
  if (err.message.includes('reviews')) {
    const message = 'You can have only one review';
    return new AppError(400, message);
  }
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. please use another value!`;
  return new AppError(400, message);
};

const handleValidatorErrorDB = (err: any) => {
  const message = `Invalid input data. ${Object.values(err.errors)
    .map((el: any) => el.message)
    .join('. ')}`;
  return new AppError(400, message);
};

const handleJWTError = () =>
  new AppError(401, 'Invalid token, please log in again');

const handleJWTExpiredError = () =>
  new AppError(401, 'Your token has expired!, please log in again');

//development error
const sendErrorDev = (err: any, req: Request, res: Response) => {
  //A) Api error
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
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
      status: err.status,
      message: err.message,
    });
  } //Programming or other unknown error:don't leak details
  //1) log error
  console.error('Error', err);
  //2) send generic message :don't leak error details
  return res
    .status(500)
    .json({ status: 'error', message: 'Something went very wrong' });
};

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //if there is not a statusCode that mean internalServerError 500 and status "error"
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = err;
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateErrorDB(error);
    if (error.name === 'ValidationError') error = handleValidatorErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    sendErrorProd(error, req, res);
  }
};
