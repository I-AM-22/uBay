import { Request } from 'express';
import { IUser } from 'types/user.types';

export declare global {
  namespace Express {
    interface Request {
      querySearch: any;
    }
    interface User extends IUser {
      id: string;
      _id: string;
    }
  }
}
