import AppError from '@utils/appError';
import catchAsync from '@utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import { STATUS_CODE } from './../types/helper.types';
import { Model } from 'mongoose';
import Product from '@models/product.model';

//Check the role of the user
export const restrictTo =
  (...roles: Array<string>) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          STATUS_CODE.FORBIDDEN,
          [],
          'You are not authorized to perform this action'
        )
      );
    }
    next();
  };

export const checkIsOwner = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const user = req?.user;

    if (user?.role === 'admin' || user?.role === 'superadmin') return next();

    // Check if the model has a user field
    // If the model doesn't have a user field, continue to the next middleware
    if (!Model.schema.path('user'))
      return next(
        new AppError(
          STATUS_CODE.INTERNAL_SERVER_ERROR,
          [],
          'Wrong use for CheckIsError'
        )
      );
    const item = await Model.findOne({ _id: id, user: user?.id });
    if (!item) {
      throw new AppError(
        STATUS_CODE.FORBIDDEN,
        [],
        'You are not authorized to perform this action'
      );
    }
    next();
  });
