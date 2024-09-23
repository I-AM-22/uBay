"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentSchema = void 0;
const zod_1 = require("zod");
exports.paymentSchema = zod_1.z.object({
    body: zod_1.z.object({
        product: zod_1.z
            .string({
            required_error: 'يجب ان يكون المنتج موجود',
        })
            .nonempty('يجب ان يكون المنتج موجود'),
    }),
});
//# sourceMappingURL=payment.schema.js.map