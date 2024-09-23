import { Request, Response, NextFunction } from 'express';
declare const globalErrorHandler: (err: any, req: Request, res: Response, next: NextFunction) => void;
declare const notFound: (req: Request, res: Response, next: NextFunction) => void;
export { notFound, globalErrorHandler };
