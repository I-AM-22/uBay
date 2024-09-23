declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    errors: any;
    type: string;
    constructor(statusCode: number, errors: {
        message: string;
        path: string[];
    }[], message?: string);
}
export default AppError;
