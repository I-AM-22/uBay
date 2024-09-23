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
exports.generateQrForCustomer = exports.generateQrForSeller = exports.receive = exports.getDelivery = exports.getAllDeliveries = void 0;
const handlerFactory_1 = require("@controllers/handlerFactory");
const delivery_model_1 = require("@models/delivery.model");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("../types/helper.types");
const payment_models_1 = require("@models/payment.models");
const product_model_1 = require("@models/product.model");
const appError_1 = require("@utils/appError");
const store_model_1 = require("@models/store.model");
const employee_model_1 = require("@models/employee.model");
exports.getAllDeliveries = (0, handlerFactory_1.getAll)(delivery_model_1.default);
exports.getDelivery = (0, handlerFactory_1.getOne)(delivery_model_1.default);
exports.receive = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { payment, status } = req.body;
    let delivDoc = yield delivery_model_1.default.findOne({ payment: payment }).populate('payment');
    let storeID = (_c = (_b = (yield employee_model_1.default.findOne({ _id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id }))) === null || _b === void 0 ? void 0 : _b.store) === null || _c === void 0 ? void 0 : _c.id;
    if (!delivDoc) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'هذا المنتج غير موجود بالمستودع'));
    }
    if (storeID != delivDoc.payment.product.store._id) {
        const storeDoc = yield store_model_1.default.findById(delivDoc.payment.product.store);
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], `هذا المنتج غير موجود في هذا المستودع يجب الذهاب الى  مستودع ${storeDoc === null || storeDoc === void 0 ? void 0 : storeDoc.name} في العنوان ${storeDoc === null || storeDoc === void 0 ? void 0 : storeDoc.address}`));
    }
    const employee = (_d = req.user) === null || _d === void 0 ? void 0 : _d.id;
    if (status == 0) {
        if (delivDoc.delivery_status != "wait") {
            return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], "هذا المنتج تم تسليمه من قبل"));
        }
        const time = new Date();
        delivDoc.seller_date = time;
        delivDoc.delivery_status = "seller";
        delivDoc.employee_seller = employee;
        delivDoc.store = storeID;
        delivDoc = yield delivDoc.save();
    }
    else if (status == 1) {
        if (delivDoc.delivery_status == "wait") {
            return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'هذا المنتج ليس ضمن مستودع'));
        }
        if (delivDoc.delivery_status == "customer") {
            return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'لقد تم تسليمك هذا المنتج رجاء التأكد من رمز التوليد'));
        }
        const time = new Date();
        delivDoc.customer_date = time;
        delivDoc.delivery_status = "customer";
        delivDoc.employee_customer = employee;
        delivDoc = yield delivDoc.save();
    }
    return res.status(helper_types_1.STATUS_CODE.SUCCESS).json(delivDoc);
}));
exports.generateQrForSeller = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { product } = req.body;
    const productDoc = yield product_model_1.default.findById(product);
    if (!productDoc || productDoc.user.id != ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'انت لست مالك هذا المنتج'));
    }
    const paymentDoc = (yield payment_models_1.default.find({ product: product }))[0];
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json({
        payment: paymentDoc.id,
        status: 0
    });
}));
exports.generateQrForCustomer = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { product } = req.body;
    const paymentDoc = (yield payment_models_1.default.find({ product: product }))[0];
    if (!paymentDoc || paymentDoc.customer.id != ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'قم بشراء المنتج اولا'));
    }
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json({
        payment: paymentDoc.id,
        status: 1
    });
}));
//# sourceMappingURL=delivery.controller.js.map