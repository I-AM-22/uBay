"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const storeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'City'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
storeSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'city',
        select: 'name'
    });
    next();
});
const Store = (0, mongoose_1.model)('Store', storeSchema);
exports.default = Store;
//# sourceMappingURL=store.model.js.map