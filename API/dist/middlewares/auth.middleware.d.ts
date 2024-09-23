import { Request, Response, NextFunction } from 'express';
import { Model } from 'mongoose';
export declare const restrictTo: (...roles: Array<string>) => (req: Request, res: Response, next: NextFunction) => void;
export declare const checkIsOwner: (Model: Model<any>) => (req: Request, res: Response, next: NextFunction) => void;
