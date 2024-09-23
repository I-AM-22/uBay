"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const zod_1 = require("zod");
exports.categorySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'اسم الفئة مطلوب',
        })
            .nonempty('اسم الفئة مطلوب'),
        description: zod_1.z
            .string({
            required_error: 'اسم الفئة مطلوب',
        })
            .nonempty('اسم الفئة مطلوب'),
    }),
});
//# sourceMappingURL=category.schema.js.map