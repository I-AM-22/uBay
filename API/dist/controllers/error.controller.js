"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.notFound = void 0;
const appError_1 = require("../utils/appError");
const helper_types_1 = require("../types/helper.types");
const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [{ message, path: [err.path] }]);
};
const handleDuplicateErrorDB = (err) => {
    let field = Object.entries(err.keyValue);
    const message = `!موجود مسبقا الرجاء استخدام قيمة اخرى ,${field[0][1]}`;
    return new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [
        { message, path: [field[0][0]] },
    ]);
};
const handleValidatorErrorDB = (err) => {
    const message = Object.values(err.errors).map((el) => {
        return { message: el.message, path: [el.path] };
    });
    return new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, message);
};
const handleJWTError = () => new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'الرجاء تسجيل الدخول');
const handleJWTExpiredError = () => new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'انتهت صلاحية الجلسة, الرجاء اعادة تسجيل الدخول');
const handelPassportError = () => new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'الرجاء تسجيل الدخول');
let a = [];
const handleZodError = (error) => {
    const prodValidationError = error.issues.map((el) => {
        return { message: el.message, path: el.path.slice(1) };
    });
    return new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, prodValidationError);
};
const sendErrorDev = (err, req, res) => {
    return res.status(err.statusCode).json({
        error: err,
        message: err.message,
        name: err.name,
        stack: err.stack,
    });
};
const sendErrorProd = (err, req, res) => {
    if (err.isOperational) {
        return res.status(err.statusCode).json({
            type: err.type,
            errors: err.errors,
            message: err === null || err === void 0 ? void 0 : err.message,
        });
    }
    console.error('Error', err);
    console.log(err.errors);
    return res
        .status(helper_types_1.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: 'حدث خلل في البرنامج' });
};
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || helper_types_1.STATUS_CODE.INTERNAL_SERVER_ERROR;
    if (!isNaN(err.status))
        err.statusCode = err.status;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res);
    }
    else if (process.env.NODE_ENV === 'production') {
        let error = Object.assign({}, err);
        error.message = err.message;
        error.name = err.name;
        if (error.name === 'CastError')
            error = handleCastErrorDB(error);
        if (error.code === 11000)
            error = handleDuplicateErrorDB(error);
        if (error.name === 'ValidationError')
            error = handleValidatorErrorDB(error);
        if (error.name === 'JsonWebTokenError')
            error = handleJWTError();
        if (error.name === 'TokenExpiredError')
            error = handleJWTExpiredError();
        if (error.name === 'ZodError')
            error = handleZodError(error);
        if (err.message === 'Unauthorized')
            error = handelPassportError();
        sendErrorProd(error, req, res);
    }
};
exports.globalErrorHandler = globalErrorHandler;
const notFound = (req, res, next) => {
    return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], `Can't find ${req.originalUrl} on this server`));
};
exports.notFound = notFound;
//# sourceMappingURL=error.controller.js.map