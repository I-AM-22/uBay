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
const wallet_model_1 = require("./wallet.model");
const user_model_1 = require("./user.model");
const profit_model_1 = require("./profit.model");
const ProfitPercentag_model_1 = require("./ProfitPercentag.model");
const deliverySchema = new mongoose_1.Schema({
    payment: {
        type: mongoose_1.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'Payment',
    },
    employee_seller: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Employee',
    },
    employee_customer: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Employee',
    },
    delivery_status: {
        type: String,
        enum: ['wait', 'seller', 'customer'],
        default: 'wait',
    },
    customer_date: {
        type: Date,
        default: null,
    },
    seller_date: {
        type: Date,
        default: null,
    },
    store: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Store',
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
deliverySchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isNew && this.customer_date != null) {
            const doc = yield this.populate('payment');
            const price = doc.payment.price;
            const buyerWallet = doc.payment.customer.wallet;
            yield wallet_model_1.default.findByIdAndUpdate(buyerWallet.id, {
                $inc: { total: -price, pending: -price },
            });
            let percentage = (yield ProfitPercentag_model_1.default.findOne({})) ? yield ProfitPercentag_model_1.default.findOne({}) : 5;
            if (percentage != 5) {
                percentage = percentage.value;
            }
            const companyFee = (price * percentage) / 100;
            const priceForSeller = price - companyFee;
            const seller = doc.payment.product.user.id;
            yield wallet_model_1.default.findOneAndUpdate({ user: seller }, { $inc: { total: priceForSeller } });
            const company = yield user_model_1.default.findOne({ email: 'company@gmail.com' });
            yield wallet_model_1.default.findByIdAndUpdate(company === null || company === void 0 ? void 0 : company.wallet.id, {
                $inc: { total: companyFee },
            });
            yield profit_model_1.default.create({
                product: doc.payment.product._id,
                value: companyFee,
                percentage
            });
            next();
        }
    });
});
deliverySchema.pre(/^find/, function () {
    this.populate('payment');
});
const Delivery = (0, mongoose_1.model)('Delivery', deliverySchema);
exports.default = Delivery;
//# sourceMappingURL=delivery.model.js.map