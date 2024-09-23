"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMyPassword = exports.resetPassword = exports.isTokenValid = exports.forgotPassword = exports.login = exports.signup = void 0;
const catchAsync_1 = require("@utils/catchAsync");
const user_model_1 = require("@models/user.model");
const appError_1 = require("@utils/appError");
const email_1 = require("@utils/email");
const crypto_1 = require("crypto");
const helper_types_1 = require("../types/helper.types");
const jwt_utils_1 = require("@utils/jwt.utils");
const cls_hooked_1 = require("cls-hooked");
const sendUser = (user, statusCode, res) => {
    const namespace = cls_hooked_1.default.getNamespace('app');
    const token = (0, jwt_utils_1.signJwt)(user.id.toString());
    user.password = undefined;
    namespace === null || namespace === void 0 ? void 0 : namespace.set('loggedInUserId', user.id);
    res.status(statusCode).send({
        token,
        user,
    });
};
exports.signup = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.role)
        req.body.role = undefined;
    const newUser = yield user_model_1.default.create(req.body);
    sendUser(newUser, 201, res);
}));
const login = (role) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.default.findOne({ email }).select('+password ');
    if (!user ||
        !user.role.includes(role) ||
        !(yield user.correctPassword(password))) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'كلمة المرور او البريد الالكتروني غير صحيح'));
    }
    sendUser(user, 201, res);
}));
exports.login = login;
exports.forgotPassword = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [
            {
                message: 'ليس هنالك مستخدم تابع لهذا البريد الالكتروني',
                path: ['email'],
            },
        ]));
    }
    const resetToken = user.createPasswordResetToken();
    yield user.save({ validateBeforeSave: false });
    try {
        yield new email_1.default(user, resetToken).sendPasswordReset();
        res.status(helper_types_1.STATUS_CODE.SUCCESS).json({
            message: 'تم ارسال رمز اعادة التعيين لبريدك الالكتروني',
        });
    }
    catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        yield user.save({ validateBeforeSave: false });
        return next(new appError_1.default(helper_types_1.STATUS_CODE.INTERNAL_SERVER_ERROR, [], 'There was an error sending the email. Try again later!'));
    }
}));
exports.isTokenValid = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hashToken = crypto_1.default
        .createHash('sha256')
        .update(req.body.token)
        .digest('hex');
    const user = yield user_model_1.default.findOne({
        passwordResetToken: hashToken,
        passwordResetExpires: { $gt: new Date(Date.now()) },
    });
    if (!user)
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], 'الرمز غير صحيح او منتهي الصلاحية'));
    res.sendStatus(helper_types_1.STATUS_CODE.SUCCESS);
}));
exports.resetPassword = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hashToken = crypto_1.default
        .createHash('sha256')
        .update(req.body.token)
        .digest('hex');
    const user = yield user_model_1.default.findOne({
        passwordResetToken: hashToken,
        passwordResetExpires: { $gt: new Date(Date.now()) },
    });
    if (!user) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], 'الرمز غير صحيح او منتهي الصلاحية'));
    }
    user.password = req.body.password;
    yield user.save();
    const home = `${req.protocol}://${req.get('host')}/`;
    yield new email_1.default(user, home).sendResetMessage();
    sendUser(user, helper_types_1.STATUS_CODE.SUCCESS, res);
}));
exports.updateMyPassword = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user)
        return next();
    const { passwordCurrent, password } = req.body;
    const user = yield user_model_1.default.findById(req.user.id).select('+password');
    if (!user)
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], 'User not found'));
    if (!(yield user.correctPassword(passwordCurrent))) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [
            {
                path: ['passwordCurrent'],
                message: 'كلمة المرور الحالية غير صحيحة',
            },
        ]));
    }
    user.password = password;
    yield user.save();
    const me = `${req.protocol}://${req.get('host')}/me`;
    sendUser(user, helper_types_1.STATUS_CODE.SUCCESS, res);
}));
//# sourceMappingURL=auth.controller.js.map