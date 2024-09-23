"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const notificationSchema = new mongoose_1.Schema({
    message: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Message',
        required: [true, 'Notification must have message'],
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Notification must have user'],
    },
    chat: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Chat',
        required: [true, 'Notification must have chat'],
    },
    read: { type: Boolean, default: false },
}, {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
});
notificationSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: {
            name: 1,
            photo: 1,
            wallet: 0,
            favoriteCategories: 0,
            favoriteCities: 0,
        },
    }).populate('message');
    next();
});
const Notification = (0, mongoose_1.model)('Notification', notificationSchema);
exports.default = Notification;
//# sourceMappingURL=notification.model.js.map