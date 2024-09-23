"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const zod_1 = require("zod");
exports.commentSchema = zod_1.z.object({
    body: zod_1.z.object({
        content: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي التعليق على محتوى',
        })
            .nonempty('يجب أن يحتوي التعليق على محتوى'),
        user: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي التعليق على مستخدم',
        })
            .nonempty('يجب أن يحتوي التعليق على مستخدم'),
        product: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي التعليق على منتج',
        })
            .nonempty('يجب أن يحتوي التعليق على منتج'),
    }),
});
//# sourceMappingURL=comment.schema.js.map