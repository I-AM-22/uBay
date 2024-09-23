import { NextFunction, Request, Response } from 'express';
export declare const getAllProfit: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getProfitPercentage: (req: Request, res: Response, next: NextFunction) => void;
export declare const createOrUpdatePercentage: (req: Request, res: Response, next: NextFunction) => void;
