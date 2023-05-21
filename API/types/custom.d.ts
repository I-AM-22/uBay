import { IUser } from './user.types';

// eslint-disable-next-line prettier/prettier
declare global {
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
