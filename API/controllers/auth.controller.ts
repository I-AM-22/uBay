import catchAsync from '@utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import User from '@models/user.model';
import { settings } from '../config/settings';
import AppError from '@utils/appError';
import Email from '@utils/email';
import crypto from 'crypto';

const sendUser = (user: any, statusCode: number, res: Response) => {
  const token = user.createSendToken(user);

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
    // await new Email(
    //   newUser,
    //   `${req.protocol}://${req.get('host')}/me`
    // ).sendWelcome();
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
    if (!user || !(await user.correctPassword(password))) {
      const message = 'Incorrect password or email';
      return next(new AppError(401, message));
    }

    sendUser(user, 201, res);
  }
);

export const restrictTo =
  (...roles: Array<string>) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(403, 'You do not have permission to perform this action ')
      );
    }
    next();
  };

export const forgotPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    // 1) Search for the user
    const user = await User.findOne({ email });
    if (!user) {
      return next(new AppError(404, 'There is no user with that email'));
    }
    // 2) Create reset token
    const resetToken = user.createPasswordResetToken();

    //3) Save the user with resetToken to the database to modify it
    await user.save({ validateBeforeSave: false });
    //Reset URL
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/resetPassword/${resetToken}`;
    // 4) Send the email
    try {
      await new Email(user, resetUrl).sendPasswordReset();
      res.status(200).json({
        status: 'success',
        message: 'Token sent to email',
      });
    } catch (err) {
      //If ann error happen get rid of reset info from database cause the message was not sent
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return next(
        new AppError(
          500,
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
      .update(req.params.token)
      .digest('hex');
    const user = await User.findOne({
      passwordResetToken: hashToken,
      passwordResetExpires: { $gt: new Date(Date.now()) },
    });
    if (!user) return next(new AppError(404, 'Token is invalid or expired'));

    res.status(200).json({ status: 'success' });
  }
);

export const resetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //1) encode the token
    const hashToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');
    //2) Find user with that resetToken and does not expire
    const user = await User.findOne({
      passwordResetToken: hashToken,
      passwordResetExpires: { $gt: new Date(Date.now()) },
    });
    if (!user) {
      return next(new AppError(400, 'Token is invalid or expired'));
    }
    //3) Save the new data
    user.password = req.body.password;
    await user.save();
    const home = `${req.protocol}://${req.get('host')}/`;
    await new Email(user, home).sendResetMessage();

    sendUser(user, 200, res);
  }
);

//update logged user password
export const updateMyPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next();
    const { passwordCurrent, password } = req.body;
    // 1) get the logged in user
    const user = await User.findById(req.user.id).select('+password');
    if (!user) return next(new AppError(404, 'this is now user'));
    // 2)check if the passwordConfirm is correct
    if (!user.correctPassword(passwordCurrent)) {
      return next(new AppError(401, 'Your current password is wrong'));
    }
    //3) Change the password to the new one
    user.password = password;
    await user.save();
    const me = `${req.protocol}://${req.get('host')}/me`;
    await new Email(user, me).sendResetMessage();
    //Logging in the user
    sendUser(user, 200, res);
  }
);
