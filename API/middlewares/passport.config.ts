import cls from 'cls-hooked';
import { JwtPayload } from 'jsonwebtoken';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { settings } from '../config/settings';
import User from '@models/user.model';
import catchAsync from '@utils/catchAsync';
import AppError from '@utils/appError';
import { STATUS_CODE } from '../types/helper.types';
import Employee from '@models/employee.model';

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
    secretOrKey: Buffer.from(settings.JWT_PUBLIC_KEY, 'base64').toString(
      'ascii'
    ),
    algorithms: ['RS256'],
  },
  catchAsync(async function (payload: JwtPayload, done: any) {
    let user= await User.findById(payload.id) || await Employee.findById(payload.id);
    if (!user) {
      return done(
        new AppError(
          STATUS_CODE.UNAUTHORIZE,

          [],
          'The user belonging to this token does no longer exist'
        )
      );
    }
    //4) Check if the user changed the password
    if (user.isPasswordChanged(payload.iat)) {
      return done(
        new AppError(
          STATUS_CODE.UNAUTHORIZE,
          [],
          'User recently changed the password!, please login again.'
        )
      );
    }
    user.passwordChangedAt = undefined;
    const namespace = cls.getNamespace('app');

    namespace?.set('loggedInUserId', user?.id);

    return done(null, user);
  })
);
