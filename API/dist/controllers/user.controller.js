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
exports.deleteUser = exports.updateUser = exports.CreateUser = exports.getUser = exports.getAllUsers = exports.userToggleActive = exports.deleteMe = exports.updateMe = exports.getMe = void 0;
const handlerFactory_1 = require("./handlerFactory");
const user_model_1 = require("@models/user.model");
const catchAsync_1 = require("@utils/catchAsync");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
        if (allowedFields.includes(el))
            newObj[el] = obj[el];
    });
    return newObj;
};
const getMe = (req, res, next) => {
    if (!req.user)
        return next();
    req.params.id = req.user.id;
    next();
};
exports.getMe = getMe;
exports.updateMe = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.password || req.body.passwordConfirm)
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'This route is not for updates password. Please use /updateMyPassword to update password'));
    if (!req.user)
        return next();
    const filteredBody = filterObj(req.body, 'name', 'email', 'favoriteCategories', 'favoriteCities');
    if (req.file)
        filteredBody.photo = req.file.filename;
    const user = yield user_model_1.default.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true });
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(user);
}));
exports.deleteMe = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user)
        return next();
    yield user_model_1.default.findByIdAndUpdate(req.user.id, { active: false });
    res.sendStatus(helper_types_1.STATUS_CODE.DELETED);
}));
exports.userToggleActive = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'الرجاء ارسال بريد الالكتروني'));
    }
    const updatedUser = yield user_model_1.default.findOne({
        email,
        includeInActive: { $ne: false },
        role: 'user',
    }).select({ active: 1 });
    if (!updatedUser) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'لا يوجد مستخدم لهذا البريد'));
    }
    updatedUser.active = !updatedUser.active;
    yield updatedUser.save();
    res.status(helper_types_1.STATUS_CODE.SUCCESS).send('ok');
}));
exports.getAllUsers = (0, handlerFactory_1.getAll)(user_model_1.default, 'user');
exports.getUser = (0, handlerFactory_1.getOne)(user_model_1.default);
exports.CreateUser = (0, handlerFactory_1.createOne)(user_model_1.default);
exports.updateUser = (0, handlerFactory_1.updateOne)(user_model_1.default);
exports.deleteUser = (0, handlerFactory_1.deleteOne)(user_model_1.default);
//# sourceMappingURL=user.controller.js.map