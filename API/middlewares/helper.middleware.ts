import catchAsync from '@utils/catchAsync';
import { Request, Response, NextFunction } from 'express';

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

export const checkIsOwner = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    await Model.findByIdAndCheckAuthorization(req.params.id, req.user);
    next();
  });
