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
const cls_hooked_1 = require("cls-hooked");
const passport_jwt_1 = require("passport-jwt");
const settings_1 = require("../config/settings");
const user_model_1 = require("@models/user.model");
const catchAsync_1 = require("@utils/catchAsync");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const employee_model_1 = require("@models/employee.model");
exports.default = new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: Buffer.from(settings_1.settings.JWT_PUBLIC_KEY, 'base64').toString('ascii'),
    algorithms: ['RS256'],
}, (0, catchAsync_1.default)(function (payload, done) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = (yield user_model_1.default.findById(payload.id)) || (yield employee_model_1.default.findById(payload.id));
        if (!user) {
            return done(new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'The user belonging to this token does no longer exist'));
        }
        if (user.isPasswordChanged(payload.iat)) {
            return done(new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'User recently changed the password!, please login again.'));
        }
        user.passwordChangedAt = undefined;
        const namespace = cls_hooked_1.default.getNamespace('app');
        namespace === null || namespace === void 0 ? void 0 : namespace.set('loggedInUserId', user === null || user === void 0 ? void 0 : user.id);
        return done(null, user);
    });
}));
//# sourceMappingURL=passport.config.js.map