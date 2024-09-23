import { Request, Response, NextFunction } from 'express';
export declare const signup: (req: Request, res: Response, next: NextFunction) => void;
export declare const login: (role: string) => (req: Request, res: Response, next: NextFunction) => void;
export declare const forgotPassword: (req: Request, res: Response, next: NextFunction) => void;
export declare const isTokenValid: (req: Request, res: Response, next: NextFunction) => void;
export declare const resetPassword: (req: Request, res: Response, next: NextFunction) => void;
export declare const updateMyPassword: (req: Request, res: Response, next: NextFunction) => void;
