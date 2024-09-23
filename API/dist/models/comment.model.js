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
const commentSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    user: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    product: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
commentSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
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
commentSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: {
            name: 1,
            photo: 1,
            wallet: 0,
            favoriteCategories: 0,
            favoriteCities: 0,
        },
    });
    next();
});
commentSchema.statics.calcAverageRatings = function (productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = yield this.aggregate([
            { $match: { product: productId } },
            {
                $group: {
                    _id: '$product',
                    numRatings: { $sum: 1 },
                },
            },
        ]);
        if (stats.length > 0) {
            const body = {
                comments: stats[0].numRatings,
            };
            yield product_model_1.default.findByIdAndUpdate(productId, body);
        }
        else {
            const body = {
                comments: 0,
            };
            yield product_model_1.default.findByIdAndUpdate(productId, body);
        }
    });
};
commentSchema.post('save', function () {
    this.constructor.calcAverageRatings(this.product);
});
commentSchema.pre('findOneAndRemove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const docToUpdate = yield this.model.findOne(this.getQuery());
        this.doc = docToUpdate;
        next();
    });
});
commentSchema.post('findOneAndRemove', function () {
    return __awaiter(this, void 0, void 0, function* () {
        this.model.calcAverageRatings(this.doc.product);
    });
});
const Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;
//# sourceMappingURL=comment.model.js.map