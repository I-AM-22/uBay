"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
const zod_1 = require("zod");
exports.messageSchema = zod_1.z.object({
    body: zod_1.z.object({
        content: zod_1.z
            .string({
            required_error: 'يجب أن تحتوي الرسالة على محتوى',
        })
            .nonempty('يجب أن تحتوي الرسالة على محتوى'),
        user: zod_1.z
            .string({
            required_error: 'يجب أن تحتوي الرسالة على مستخدم',
        })
            .nonempty('يجب أن تحتوي الرسالة على مستخدم'),
        chat: zod_1.z
            .string({
            required_error: 'يجب أن تحتوي الرسالة على محادثة',
        })
            .nonempty('يجب أن تحتوي الرسالة على محادثة'),
    }),
});
//# sourceMappingURL=message.schema.js.map