"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSchema = void 0;
const zod_1 = require("zod");
exports.storeSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي المتجر على اسم',
        })
            .nonempty('يجب أن يحتوي المتجر على اسم'),
        address: zod_1.z
            .string({
            required_error: 'يجب أن يحتوي المتجر على عنوان',
        })
            .nonempty('يجب أن يحتوي المتجر على عنوان'),
        city: zod_1.z
            .string({ required_error: 'يجب أن يحتوي المتجر على مدينة' })
            .nonempty('يجب أن يحتوي المتجر على مدينة'),
    }),
});
//# sourceMappingURL=store.schema.js.map