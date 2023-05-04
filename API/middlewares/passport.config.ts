import { JwtPayload } from 'jsonwebtoken';
import {
  ExtractJwt,
  Strategy as JWTStrategy,
  JwtFromRequestFunction,
} from 'passport-jwt';
import { settings } from '../config/settings';
import User from '@models/user.model';
import catchAsync from '@utils/catchAsync';
import AppError from '@utils/appError';
import { Request } from 'express';

// const cookieExtractor = (req: Request) => {
//   let token;
//   if (req && req.cookies) {
//     token = req.cookies.jwt;
//   }
//   return token;
// };

export default new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: settings.JWT_SECRET,
  },
  catchAsync(async function (payload: JwtPayload, done: any) {
    const user = await User.findById(payload.id);
    if (!user) {
      return done(
        new AppError(
          401,
          'The user belonging to this token does no longer exist'
        )
      );
    }
    //4) Check if the user changed the password
    if (user.isPasswordChanged(payload.iat)) {
      return done(
        new AppError(
          401,
          'User recently changed the password!, please login again.'
        )
      );
    }
    user.passwordChangedAt = undefined;
    return done(null, user);
  })
);
