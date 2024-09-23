import { NextFunction, Response, Request } from 'express';
export declare const uploadUserPhoto: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const resizeUserImage: (req: Request, res: Response, next: NextFunction) => void;
export declare const uploadProductPhotos: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const resizeProductPhotos: (req: Request, res: Response, next: NextFunction) => void;
export declare const resizeAndUpload: (img: any) => Promise<APIResponse<ImageResponse>>;
