import { NextFunction, Request, Response } from 'express';
export declare const getAllPayment: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getPayment: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const deletePayment: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const createPayment: (req: Request, res: Response, next: NextFunction) => void;
export declare const hasCoupon: (req: Request, res: Response, next: NextFunction) => void;
