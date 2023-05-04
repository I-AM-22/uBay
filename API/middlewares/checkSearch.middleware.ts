import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  req.querySearch = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'xi' } },
          { email: { $regex: req.query.search, $options: 'xi' } },
          { message: { $regex: req.query.search, $options: 'xi' } },
        ],
      }
    : {};
  next();
};
