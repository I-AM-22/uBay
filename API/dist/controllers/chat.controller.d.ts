import { Request, Response, NextFunction } from 'express';
export declare const isSeller: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const accessChat: (req: Request, res: Response, next: NextFunction) => void;
export declare const getAllChats: (req: Request, res: Response, next: NextFunction) => void;
export declare const getChat: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const CreateChat: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const updateChat: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const deleteChat: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
