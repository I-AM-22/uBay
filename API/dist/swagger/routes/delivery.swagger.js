"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrSchema = exports.deliverySchema = void 0;
exports.deliverySchema = {
    type: 'object',
    properties: {
        payment: {
            type: 'string',
            description: 'payment',
        },
        employee: {
            type: 'string',
            description: 'employee',
        },
        customer_date: {
            type: 'string',
            description: 'the date that customer receive',
        },
        seller_date: {
            type: 'string',
            description: 'the date that customer receive',
        },
        status: {
            type: 'string',
            description: 'to check who is recieve 0 for seller and 1 for customer',
        },
    },
    example: {
        payment: 'ID',
        status: "0"
    },
    required: ['payment', 'status'],
};
exports.QrSchema = {
    type: 'object',
    properties: {
        product: {
            type: 'string',
            description: 'product',
        },
    },
    example: {
        product: 'ID',
    },
    required: ['product'],
};
//# sourceMappingURL=delivery.swagger.js.map