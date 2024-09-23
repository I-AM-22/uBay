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
exports.couponMaker = exports.checkProductIspaid = exports.getProductCoupons = exports.getMyCoupons = exports.removeCouponfromProduct = exports.deleteCoupon = exports.updateCoupon = exports.createCoupon = exports.getCoupon = exports.getCoupons = void 0;
const coupon_model_1 = require("@models/coupon.model");
const handlerFactory_1 = require("./handlerFactory");
const catchAsync_1 = require("@utils/catchAsync");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("./../types/helper.types");
const product_model_1 = require("@models/product.model");
exports.getCoupons = (0, handlerFactory_1.getAll)(coupon_model_1.default);
exports.getCoupon = (0, handlerFactory_1.getOne)(coupon_model_1.default);
exports.createCoupon = (0, handlerFactory_1.createOne)(coupon_model_1.default);
exports.updateCoupon = (0, handlerFactory_1.updateOne)(coupon_model_1.default);
exports.deleteCoupon = (0, handlerFactory_1.deleteOne)(coupon_model_1.default);
exports.removeCouponfromProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.body.coupon.product._id;
    yield product_model_1.default.findByIdAndUpdate(productId, {
        $pull: { coupons: req.body.coupon._id },
    });
    next();
}));
exports.getMyCoupons = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    req.query.user = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    req.query.expire = { gt: Date.now().toString() };
    next();
}));
exports.getProductCoupons = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.productId)
        req.params.id = req.params.productId;
    if (req.body.product)
        req.params.id = req.body.product;
    next();
}));
exports.checkProductIspaid = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.coupon.product.is_paid)
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'لا يمكن تعديل او حذف خصم لمنتج تم بيعه'));
    next();
}));
exports.couponMaker = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const coupon = yield coupon_model_1.default.findById(req.params.id);
    if (!coupon)
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], 'There is no coupon with that Id'));
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) !== coupon.product.user.id)
        return next(new appError_1.default(helper_types_1.STATUS_CODE.FORBIDDEN, [], 'You are not authorized to perform this action'));
    req.body.coupon = coupon;
    next();
}));
//# sourceMappingURL=coupon.controller.js.map