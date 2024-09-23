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
const cls_hooked_1 = require("cls-hooked");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    likedBy: [{ type: mongoose_1.Types.ObjectId, ref: 'User' }],
    coupons: [{ type: mongoose_1.Types.ObjectId, ref: 'Coupon' }],
    photos: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'يجب ان يكون السعر بقيمة موجبة'],
    },
    is_paid: {
        type: Boolean,
        default: false,
    },
    category: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
    store: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Store',
    },
    comments: { type: Number, default: 0 },
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
productSchema.virtual('likes').get(function () {
    if (!this.likedBy)
        return undefined;
    return this.likedBy.length;
});
productSchema.virtual('likedByMe').get(function () {
    if (!this.likedBy)
        return undefined;
    const namespace = cls_hooked_1.default.getNamespace('app');
    const user = namespace === null || namespace === void 0 ? void 0 : namespace.get('loggedInUserId');
    return this.likedBy.filter((e) => (e === null || e === void 0 ? void 0 : e.id) === user).length ? true : false;
});
productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.index({ description: 1 });
productSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.populate('category');
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
        yield this.populate({
            path: 'likedBy',
            select: {
                name: 1,
                photo: 1,
                wallet: 0,
                favoriteCategories: 0,
                favoriteCities: 0,
            },
        });
        yield this.populate('store');
    });
});
productSchema.pre(/^find/, function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.populate({ path: 'category' })
            .populate({
            path: 'user',
            select: {
                name: 1,
                photo: 1,
                wallet: 0,
                favoriteCategories: 0,
                favoriteCities: 0,
            },
        })
            .populate({ path: 'likedBy', select: { name: 1, photo: 1, wallet: 0 } })
            .populate({ path: 'store', select: { name: 1 } })
            .populate({ path: 'coupons', select: { product: 0 } });
        next();
    });
});
productSchema.pre('findOneAndRemove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = yield this.model.findOne(this.getQuery());
        if (doc.is_paid) {
            return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'لا يمكنك حذف منتج تم بيعه'));
        }
    });
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
//# sourceMappingURL=product.model.js.map