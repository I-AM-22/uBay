"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentSchema = void 0;
exports.paymentSchema = {
    type: 'object',
    properties: {
        product: {
            type: 'string',
            description: 'The id of product you wil buy',
        },
        note: {
            type: 'string',
            description: 'optional',
        }
    },
    example: {
        product: '32432423ksdj',
        note: 'لقد تم دفع الحساب كاملا',
    },
    required: ['product'],
};
//# sourceMappingURL=payment.swagger.js.map