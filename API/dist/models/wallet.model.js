"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const walletSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', unique: true },
    total: {
        type: Number,
        required: true,
        default: 0,
    },
    pending: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
});
walletSchema.virtual('available').get(function () {
    return this.total - this.pending;
});
const Wallet = (0, mongoose_1.model)('Wallet', walletSchema);
exports.default = Wallet;
//# sourceMappingURL=wallet.model.js.map