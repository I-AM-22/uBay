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
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const wallet_model_1 = require("./wallet.model");
const delivery_model_1 = require("./delivery.model");
const paymentSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'Product',
    },
    coupon: { type: mongoose_1.Types.ObjectId, default: null, ref: 'Coupon' },
    customer: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    price: {
        type: Number,
        required: true,
    },
    is_discount: {
        type: Boolean,
        default: false,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
paymentSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const proDoc = yield product_model_1.default.findById(this.product);
        if (proDoc === null || proDoc === void 0 ? void 0 : proDoc.is_paid) {
            return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'هذا المنتج غير متاح'));
        }
        yield product_model_1.default.findByIdAndUpdate(proDoc === null || proDoc === void 0 ? void 0 : proDoc.id, { is_paid: true });
        next();
    });
});
paymentSchema.post('save', function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        const deliveryDoc = yield delivery_model_1.default.create({ payment: doc.id });
    });
});
paymentSchema.post('save', function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        const paymentDoc = yield Payment.findById(doc.id);
        yield wallet_model_1.default.findByIdAndUpdate(paymentDoc === null || paymentDoc === void 0 ? void 0 : paymentDoc.customer.wallet._id, {
            $inc: { pending: this.price },
        });
    });
});
paymentSchema.pre('findOneAndRemove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = yield this.model.findOne(this.getQuery());
        yield product_model_1.default.findByIdAndUpdate(doc.product.id, { is_paid: false });
        yield wallet_model_1.default.findByIdAndUpdate(doc.customer.wallet.id, {
            $inc: { pending: -doc.price },
        });
        yield delivery_model_1.default.findOneAndRemove({ payment: doc.id });
        next();
    });
});
paymentSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'product',
        select: { price: 1, likedBy: 0, category: 0, user: 1, store: 1 },
    }).populate({
        path: 'customer',
        select: { name: 1, email: 1, wallet: 1 },
    });
    next();
});
const Payment = (0, mongoose_1.model)('Payment', paymentSchema);
exports.default = Payment;
//# sourceMappingURL=payment.models.js.map