"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponSchema = void 0;
const zod_1 = require("zod");
exports.couponSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي الكوبون على مستخدم',
        })
            .nonempty('يجب أن يحتوي الكوبون على مستخدم'),
        product: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي الكوبون على منتج',
        })
            .nonempty('يجب أن يحتوي الكوبون على منتج'),
        discount: zod_1.z
            .number({ required_error: 'يجب أن يحتوي الكوبون على خصم' })
            .nonnegative('يجب أن تكون قيمة الخصم موجبة'),
    }),
});
//# sourceMappingURL=coupon.schema.js.map