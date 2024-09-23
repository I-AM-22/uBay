"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percentageSchema = void 0;
const zod_1 = require("zod");
exports.percentageSchema = zod_1.z.object({
    body: zod_1.z.object({
        value: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي الخصم على قيمة',
        })
            .refine(value => {
            const numericValue = Number(value);
            return !isNaN(numericValue) && numericValue >= 1 && numericValue <= 100;
        }, {
            message: 'نسبة الربح يجب أن تكون بين 1 و 100',
        }),
    }),
});
//# sourceMappingURL=profit.schema.js.map