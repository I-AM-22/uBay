"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citySchema = void 0;
const zod_1 = require("zod");
exports.citySchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'يجب ان يحتوي المدنية على اسم',
        })
    }),
});
//# sourceMappingURL=city.schema.js.map