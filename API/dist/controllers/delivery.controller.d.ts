import { NextFunction, Request, Response } from 'express';
export declare const getAllDeliveries: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getDelivery: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const receive: (req: Request, res: Response, next: NextFunction) => void;
export declare const generateQrForSeller: (req: Request, res: Response, next: NextFunction) => void;
export declare const generateQrForCustomer: (req: Request, res: Response, next: NextFunction) => void;
