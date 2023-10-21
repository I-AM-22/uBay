import catchAsync from '@utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import User from '@models/user.model';
import AppError from '@utils/appError';
import Email from '@utils/email';
import crypto from 'crypto';
import { STATUS_CODE } from '../types/helper.types';
import { signJwt } from '@utils/jwt.utils';
import cls from 'cls-hooked';

//Send The User With the response after login and signup
const sendUser = (user: any, statusCode: number, res: Response) => {
  const namespace = cls.getNamespace('app');
  const token = signJwt(user.id.toString());
  user.password = undefined;
  namespace?.set('loggedInUserId', user.id);

  res.status(statusCode).send({
    token,
    user,
  });
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.role) req.body.role = undefined;
    const newUser = await User.create(req.body);

    sendUser(newUser, 201, res);
  }
);

export const  login = (role: string) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //Check if  the email and password  exist
    const { email, password } = req.body;

    //check if the user exist and the password correct
    const user = await User.findOne({ email }).select('+password ');
    if (
      !user ||
      !user.role.includes(role) ||
      !(await user.correctPassword(password))
    ) {
      return next(
        new AppError(
          STATUS_CODE.UNAUTHORIZE,
          [],
          'كلمة المرور او البريد الالكتروني غير صحيح'
        )
      );
    }

    sendUser(user, 201, res);
  });

export const forgotPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    // 1) Search for the user
    const user = await User.findOne({ email });
    if (!user) {
      return next(
        new AppError(STATUS_CODE.NOT_FOUND, [
          {
            message: 'ليس هنالك مستخدم تابع لهذا البريد الالكتروني',
            path: ['email'],
          },
        ])
      );
    }
    // 2) Create reset token
    const resetToken = user.createPasswordResetToken();

    //3) Save the user with resetToken to the database to modify it
    await user.save({ validateBeforeSave: false });
    //Reset URL
    // const resetUrl = `${req.protocol}://${req.get(
    //   'host'
    // )}/resetPassword/${c}`;
    // 4) Send the email
    try {
      await new Email(user, resetToken).sendPasswordReset();
      res.status(STATUS_CODE.SUCCESS).json({
        message: 'تم ارسال رمز اعادة التعيين لبريدك الالكتروني',
      });
    } catch (err) {
      //If ann error happen get rid of reset info from database cause the message was not sent
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return next(
        new AppError(
          STATUS_CODE.INTERNAL_SERVER_ERROR,
          [],
          'There was an error sending the email. Try again later!'
        )
      );
    }
  }
);

//Check if the reset token valid
export const isTokenValid = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const hashToken = crypto
      .createHash('sha256')
      .update(req.body.token)
      .digest('hex');
    const user = await User.findOne({
      passwordResetToken: hashToken,
      passwordResetExpires: { $gt: new Date(Date.now()) },
    });
    if (!user)
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          'الرمز غير صحيح او منتهي الصلاحية'
        )
      );

    res.sendStatus(STATUS_CODE.SUCCESS);
  }
);

export const resetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //1) encode the token
    const hashToken = crypto
      .createHash('sha256')
      .update(req.body.token)
      .digest('hex');
    //2) Find user with that resetToken and does not expire
    const user = await User.findOne({
      passwordResetToken: hashToken,
      passwordResetExpires: { $gt: new Date(Date.now()) },
    });
    if (!user) {
      return next(
        new AppError(
          STATUS_CODE.NOT_FOUND,
          [],
          'الرمز غير صحيح او منتهي الصلاحية'
        )
      );
    }
    //3) Save the new data
    user.password = req.body.password;
    await user.save();
    const home = `${req.protocol}://${req.get('host')}/`;
    await new Email(user, home).sendResetMessage();

    sendUser(user, STATUS_CODE.SUCCESS, res);
  }
);

//update logged user password
export const updateMyPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    const { passwordCurrent, password } = req.body;
    // 1) get the logged in user
    const user = await User.findById(req.user.id).select('+password');
    if (!user)
      return next(new AppError(STATUS_CODE.NOT_FOUND, [], 'User not found'));
    // 2)check if the passwordConfirm is correct
    if (!(await user.correctPassword(passwordCurrent))) {
      return next(
        new AppError(STATUS_CODE.UNAUTHORIZE, [
          {
            path: ['passwordCurrent'],
            message: 'كلمة المرور الحالية غير صحيحة',
          },
        ])
      );
    }
    //3) Change the password to the new one
    user.password = password;
    await user.save();
    const me = `${req.protocol}://${req.get('host')}/me`;
    // await new Email(user, me).sendResetMessage();
    //Logging in the user
    sendUser(user, STATUS_CODE.SUCCESS, res);
  }
);
