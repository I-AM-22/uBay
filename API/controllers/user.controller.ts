import { Request, Response, NextFunction } from 'express';
import {
  createOne,
  getAll,
  getOne,
  deleteOne,
  updateOne,
} from './handlerFactory';
import User from '@models/user.model';
import catchAsync from '@utils/catchAsync';
import AppError from '@utils/appError';

const filterObj = (obj: any, ...allowedFields: any) => {
  const newObj: any = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

export const getMe = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) return next();
  req.params.id = req.user.id;
  next();
};
export const updateMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //If the user use update me should not send pass cause this route for normal work like update name,email... not auth
    //and if the front end developer thought this route for update password
    if (req.body.password || req.body.passwordConfirm)
      return next(
        new AppError(
          400,
          'This route is not for updates password. Please use /updateMyPassword to update password'
        )
      );
    if (!req.user) return next();
    const filteredBody = filterObj(req.body, 'name', 'email');
    if (req.file) filteredBody.photo = req.file.filename;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      filteredBody,
      { new: true, runValidators: true }
      //run validator for normal like minlength or enum but not required
    );
    res.status(200).json({ status: 'success', data: { user } });
  }
);

export const deleteMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();

    await User.findByIdAndUpdate(req.user.id, { active: false });
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);

export const getAllUsers = getAll(User);
export const getUser = getOne(User);
export const CreateUser = createOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
