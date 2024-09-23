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
exports.checkIsOwner = exports.restrictTo = void 0;
const appError_1 = require("@utils/appError");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("./../types/helper.types");
const restrictTo = (...roles) => (req, res, next) => {
    if (!req.user)
        return next();
    if (!roles.includes(req.user.role)) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.FORBIDDEN, [], 'You are not authorized to perform this action'));
    }
    next();
};
exports.restrictTo = restrictTo;
const checkIsOwner = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = req === null || req === void 0 ? void 0 : req.user;
    if ((user === null || user === void 0 ? void 0 : user.role) === 'admin' || (user === null || user === void 0 ? void 0 : user.role) === 'superadmin')
        return next();
    if (!Model.schema.path('user'))
        return next(new appError_1.default(helper_types_1.STATUS_CODE.INTERNAL_SERVER_ERROR, [], 'Wrong use for CheckIsError'));
    const item = yield Model.findOne({ _id: id, user: user === null || user === void 0 ? void 0 : user.id });
    if (!item) {
        throw new appError_1.default(helper_types_1.STATUS_CODE.FORBIDDEN, [], 'You are not authorized to perform this action');
    }
    next();
}));
exports.checkIsOwner = checkIsOwner;
//# sourceMappingURL=auth.middleware.js.map