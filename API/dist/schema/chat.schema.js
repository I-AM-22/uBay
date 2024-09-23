"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSchema = void 0;
const zod_1 = require("zod");
exports.chatSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z
            .string({
            required_error: 'يجب أن تحتوي الدردشة على مستخدم',
        })
            .nonempty('يجب أن تحتوي الدردشة على مستخدم'),
        product: zod_1.z
            .string({
            required_error: 'يجب أن تحتوي الدردشة على منتج',
        })
            .nonempty('يجب أن تحتوي الدردشة على منتج'),
    }),
});
//# sourceMappingURL=chat.schema.js.map