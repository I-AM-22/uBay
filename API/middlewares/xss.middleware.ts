import validator from 'validator';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  let keys = Object.keys(req.body);
  keys.forEach((el) => {
    req.body[el] = validator.escape(req.body[el]);
  });
  next();
};
