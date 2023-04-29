import { Request } from 'express';
export declare global {
  namespace Express {
    interface Request {
      querySearch: any;
    }
    interface User {
      id: string;
      _id: string;
      role: string;
    }
  }
}
