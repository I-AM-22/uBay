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
exports.hasCoupon = exports.createPayment = exports.deletePayment = exports.getPayment = exports.getAllPayment = void 0;
const payment_models_1 = require("@models/payment.models");
const handlerFactory_1 = require("@controllers/handlerFactory");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("../types/helper.types");
const product_model_1 = require("@models/product.model");
const appError_1 = require("@utils/appError");
const coupon_model_1 = require("@models/coupon.model");
exports.getAllPayment = (0, handlerFactory_1.getAll)(payment_models_1.default);
exports.getPayment = (0, handlerFactory_1.getOne)(payment_models_1.default);
exports.deletePayment = (0, handlerFactory_1.deleteOne)(payment_models_1.default);
exports.createPayment = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { product, price, is_discount, couponId } = req.body;
    const payment = { customer: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id, product, price, is_discount, coupon: couponId };
    const walletDoc = (_b = req.user) === null || _b === void 0 ? void 0 : _b.wallet;
    if (!walletDoc || walletDoc.available < req.body.price) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'يرجى شحن حسابك قبل عملية شراء المنتج'));
    }
    const paymentDoc = yield payment_models_1.default.create(payment);
    res.status(helper_types_1.STATUS_CODE.CREATED).json(paymentDoc);
}));
exports.hasCoupon = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const couponDoc = yield coupon_model_1.default.findOne({
        user: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id,
        product: req.body.product,
        expire: { $gte: new Date() }
    });
    const productDoc = yield product_model_1.default.findById(req.body.product);
    if (!productDoc) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], 'There is no product with that Id'));
    }
    let discount = 0, is_discount = false, couponId = null;
    if (couponDoc) {
        discount = couponDoc.discount;
        is_discount = true;
        couponId = couponDoc.id;
    }
    let price = (productDoc === null || productDoc === void 0 ? void 0 : productDoc.price) - discount;
    (price < 0) ? price = 0 : price;
    const updatedReqBody = Object.assign(Object.assign({}, req.body), { price: price, is_discount: is_discount, couponId });
    req.body = updatedReqBody;
    next();
}));
//# sourceMappingURL=payment.controller.js.map