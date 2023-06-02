import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import { STATUS_CODE } from './../types/helper.types';

export const checkQuerySearch = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.querySearch = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'xi' } },
          { email: { $regex: req.query.search, $options: 'xi' } },
          { content: { $regex: req.query.search, $options: 'xi' } },
        ],
      }
    : {};
  next();
};

export const checkIsOwner = (Model: any, idFrom?: string) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    const id = idFrom ? req.body[idFrom] : req.params.id;
    const user = req.user;

    const item = await Model.findOne({ _id: id, user: user.id });

    if (!item && user.role !== 'admin') {
      throw new AppError(
        STATUS_CODE.FORBIDDEN,
        [],
        'You are not authorized to perform this action'
      );
    }
    next();
  });

export const setIds =
  (id?: string) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.user) req.body.user = req.user?.id;
    if (id && !req.body[id.slice(0, id.length - 2)])
      req.body[id.slice(0, id.length - 2)] = req.params[id];
    next();
  };
