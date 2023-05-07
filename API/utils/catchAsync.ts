import { Request, Response, NextFunction } from 'express';

export default (fn: CallableFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    //catch make a return for the program
    fn(req, res, next).catch(next); //catch((err)=>next(err))
  };
};

/*
catchAsync func receive the fn func and return a func that calling fn func (the controller) 
with a catch for errors and the catchAsync act like a global controller calling another 
controller with a handling for errors 
the conclusion catchAsync is a func receive a fun and return a func(controller) calling the sent controller with 
error handling
and we call catchAsync in all controllers and the returned func called by express when someone
hits the route
*/
