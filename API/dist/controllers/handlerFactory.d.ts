import { Model } from 'mongoose';
import { RequestHandler } from 'express';
export declare const deleteOne: (Model: any) => RequestHandler;
export declare const updateOne: (Model: Model<any>) => RequestHandler;
export declare const createOne: (Model: Model<any>, addFiled?: any) => RequestHandler;
export declare const getOne: (Model: Model<any>, ...popOptions: Array<any>) => RequestHandler;
export declare const getAll: (Model: any, path?: string) => RequestHandler;
