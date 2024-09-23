"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfitPercentageSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
const ProfitPercentage = (0, mongoose_1.model)('ProfitPercentage', ProfitPercentageSchema);
exports.default = ProfitPercentage;
//# sourceMappingURL=ProfitPercentag.model.js.map