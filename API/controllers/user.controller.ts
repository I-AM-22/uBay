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
import { STATUS_CODE } from '../types/helper.types';

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
          STATUS_CODE.BAD_REQUEST,
          [],
          'This route is not for updates password. Please use /updateMyPassword to update password'
        )
      );
    if (!req.user) return next();
    const filteredBody = filterObj(
      req.body,
      'name',
      'email',
      'favoriteCategories',
      'favoriteCities'
    );
    if (req.file) filteredBody.photo = req.file.filename;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      filteredBody,
      { new: true, runValidators: true }
      //run validator for normal like minlength or enum but not required
    );
    res.status(STATUS_CODE.SUCCESS).json(user);
  }
);

export const deleteMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();

    await User.findByIdAndUpdate(req.user.id, { active: false });
    res.sendStatus(STATUS_CODE.DELETED);
  }
);

export const userToggleActive = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    if (!email) {
      return next(
        new AppError(
          STATUS_CODE.BAD_REQUEST,
          [],
          'الرجاء ارسال بريد الالكتروني'
        )
      );
    }
    const updatedUser = await User.findOne({
      email,
      includeInActive: { $ne: false },
      role: 'user',
    }).select({ active: 1 });
    if (!updatedUser) {
      return next(
        new AppError(STATUS_CODE.BAD_REQUEST, [], 'لا يوجد مستخدم لهذا البريد')
      );
    }
    updatedUser.active = !updatedUser.active;
    await updatedUser.save();
    res.status(STATUS_CODE.SUCCESS).send('ok');
  }
);
export const getAllUsers = getAll(User, 'user');
export const getUser = getOne(User);
export const CreateUser = createOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
