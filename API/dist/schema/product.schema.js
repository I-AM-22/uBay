"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي المنتج على عنوان',
        })
            .nonempty('يجب أن يحتوي المنتج على عنوان'),
        content: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي المنتج على محتوى',
        })
            .nonempty('يجب أن يحتوي المنتج على محتوى'),
        user: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي المنتج على مستخدم',
        })
            .nonempty('يجب أن يحتوي المنتج على مستخدم'),
        photos: zod_1.z
            .array(zod_1.z.string(), { required_error: 'يجب أن يحتوي المنتج على صور' })
            .nonempty('يجب أن يحتوي المنتج على صور')
            .min(1, 'يجب أن يحتوي المنتج على صورة واحدة على الأقل'),
        price: zod_1.z.string({
            required_error: 'يجب أن يحتوي المنتج على سعر',
        }),
        category: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي المنتج على فئة',
        })
            .nonempty('يجب أن يحتوي المنتج على فئة'),
    }),
});
//# sourceMappingURL=product.schema.js.map