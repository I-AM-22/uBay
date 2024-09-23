"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(statusCode, errors, message) {
        super(message ? message : 'error');
        this.type = errors.length ? 'form' : 'default';
        this.statusCode = statusCode;
        this.isOperational = true;
        this.errors = (errors === null || errors === void 0 ? void 0 : errors.length) ? errors : undefined;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
//# sourceMappingURL=appError.js.map