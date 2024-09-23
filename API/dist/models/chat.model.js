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
const chatSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: 'sender',
    },
    customer: {
        type: mongoose_1.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    seller: {
        type: mongoose_1.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    lastMessage: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Message' },
}, {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
});
chatSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.populate({
            path: 'customer',
            select: {
                name: 1,
                photo: 1,
                wallet: 0,
                favoriteCategories: 0,
                favoriteCities: 0,
            },
        });
        yield this.populate({
            path: 'seller',
            select: {
                name: 1,
                photo: 1,
                wallet: 0,
                favoriteCategories: 0,
                favoriteCities: 0,
            },
        });
        yield this.populate({
            path: 'product',
            select: {
                user: 0,
                title: 1,
                photos: 1,
                category: 1,
                price: 1,
                likedBy: 0,
                coupons: 0,
            },
        });
    });
});
chatSchema.pre(/^find/, function (next) {
    this.populate('customer', {
        name: 1,
        photo: 1,
        wallet: 0,
        favoriteCategories: 0,
        favoriteCities: 0,
    })
        .populate({
        path: 'seller',
        select: {
            name: 1,
            photo: 1,
            wallet: 0,
            favoriteCategories: 0,
            favoriteCities: 0,
        },
    })
        .populate({
        path: 'product',
        select: {
            user: 0,
            title: 1,
            photos: 1,
            category: 1,
            price: 1,
            likedBy: 0,
            coupons: 0,
        },
    });
    next();
});
const Chat = (0, mongoose_1.model)('Chat', chatSchema);
exports.default = Chat;
//# sourceMappingURL=chat.model.js.map