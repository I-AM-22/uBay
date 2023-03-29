import catchAsync from '@utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import User from '@models/User';
import { settings } from '../config/settings';
import AppError from '@utils/appError';

const sendUser = (user: any, statusCode: number, res: Response) => {
  const token = user.createSendToken(user);
  const expires: number = Number(settings.JWT_COOKIE_EXPIRES_IN);
  const cookieOptions = {
    expires: new Date(Date.now() + expires * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false,
  };
  if (settings.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);
  //remove password from output
  user.password = undefined;
  res.status(statusCode).send({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await User.create(req.body);
    sendUser(newUser, 201, res);
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //Check if  the email and password  exist
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError(400, 'Please provide password and email'));
    }
    //check if the user exist and the password correct
    const user = await User.findOne({ email }).select('+password ');
    if (!user || !user.correctPassword(password)) {
      const message = 'Incorrect password or email';
      return next(new AppError(401, message));
    }
    sendUser(user, 201, res);
  }
);
