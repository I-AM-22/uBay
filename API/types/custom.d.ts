import { Request } from 'express';
import { IUser } from 'types/user.types';

export declare global {
  namespace Express {
    interface User extends Omit<IUser, 'password'> {
      id: string;
      _id: string;
    }
  }
}
