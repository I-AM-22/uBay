import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
import { STATUS_CODE } from '../types/helper.types';

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(STATUS_CODE.BAD_REQUEST, message);
};

const handleDuplicateErrorDB = (err: any) => {
  if (err.message.includes('reviews')) {
    const message = 'You can have only one review';
    return new AppError(STATUS_CODE.BAD_REQUEST, message);
  }
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. please use another value!`;
  return new AppError(STATUS_CODE.BAD_REQUEST, message);
};

const handleValidatorErrorDB = (err: any) => {
  const message = `Invalid input data. ${Object.values(err.errors)
    .map((el: any) => el.message)
    .join('. ')}`;
  return new AppError(STATUS_CODE.BAD_REQUEST, message);
};

const handleJWTError = () =>
  new AppError(STATUS_CODE.UNAUTHORIZE, 'Invalid token, please log in again');

const handleJWTExpiredError = () =>
  new AppError(
    STATUS_CODE.UNAUTHORIZE,
    'Your token has expired!, please log in again'
  );

const handelPassportError = () =>
  new AppError(
    STATUS_CODE.UNAUTHORIZE,
    'You are not logged in, please log in to get access.'
  );

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
    .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
    .json({ status: 'error', message: 'Something went very wrong' });
};

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //if there is not a statusCode that mean internalServerError 500 and status "error"
  err.statusCode = err.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR;
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
    if (err.message === 'Unauthorized') error = handelPassportError();

    sendErrorProd(error, req, res);
  }
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
  //req.originalURl mean the route was sent
  return next(
    new AppError(
      STATUS_CODE.NOT_FOUND,
      `Can't find ${req.originalUrl} on this server`
    )
  ); //skip all middleware and go to the errors handler
};

export { notFound, globalErrorHandler };
