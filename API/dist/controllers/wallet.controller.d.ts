import { NextFunction, Request, Response } from 'express';
export declare const chargeMyWallet: (req: Request, res: Response, next: NextFunction) => void;
export declare const getAllWallets: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
