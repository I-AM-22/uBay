import { Request, Response, NextFunction } from 'express';

export const setIds =
  (id?: string) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.user) {
      req.body.user = req.user?.id;
    }
    if (id && !req.body[id.slice(0, id.length - 2)]) {
      req.body[id.slice(0, id.length - 2)] = req.params[id];
    }
    next();
  };
