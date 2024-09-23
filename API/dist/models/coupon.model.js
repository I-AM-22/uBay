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
const couponSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    product: { type: mongoose_1.Types.ObjectId, required: true, ref: 'Product' },
    expire: {
        type: Date,
        default: null,
    },
    discount: {
        type: Number,
        required: true,
    },
    active: { type: Boolean, default: true },
}, { timestamps: true });
couponSchema.index({ product: 1, user: 1 }, { unique: true });
couponSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.populate({
            path: 'product',
            select: { user: 0, title: 1, photos: 1, category: 1, price: 1, likedBy: 0 },
        });
        yield this.populate({
            path: 'user',
            select: {
                name: 1,
                photo: 1,
                wallet: 0,
                favoriteCategories: 0,
                favoriteCities: 0,
            },
        });
    });
});
couponSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'product',
        select: {
            user: 1,
            title: 1,
            photos: 1,
            category: 1,
            price: 1,
            is_paid: 1,
            likedBy: 0,
            coupons: 0,
        },
    });
    this.populate({ path: 'user', select: { name: 1, photo: 1, wallet: 0 } });
    next();
});
couponSchema.pre(/^find/, function (next) {
    this.find({
        $or: [
            { expire: { $gt: Date.now() } },
            { expire: null },
        ],
        active: true,
    });
    next();
});
couponSchema.post('save', function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        yield product_model_1.default.findByIdAndUpdate(doc.product.id, {
            $push: { coupons: doc._id },
        });
    });
});
const Coupon = (0, mongoose_1.model)('Coupon', couponSchema);
exports.default = Coupon;
//# sourceMappingURL=coupon.model.js.map