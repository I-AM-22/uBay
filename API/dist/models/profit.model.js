"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profitSchema = new mongoose_1.Schema({
    product: {
        type: String,
        required: true,
        ref: 'Product'
    },
    value: {
        type: Number,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
const Profit = (0, mongoose_1.model)('Profit', profitSchema);
exports.default = Profit;
//# sourceMappingURL=profit.model.js.map