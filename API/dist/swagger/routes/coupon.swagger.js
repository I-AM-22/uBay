"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteSchema = exports.couponSchema = void 0;
exports.couponSchema = {
    type: 'object',
    properties: {
        user: {
            type: 'string',
            description: 'The ID of the user',
            example: 'user-id',
        },
        product: {
            type: 'string',
            description: 'The ID of the product',
            example: 'product-id',
        },
        expire: {
            type: 'string',
            description: 'The expiration date of the coupon',
            example: '2023-12-31',
        },
        discount: {
            type: 'number',
            description: 'The discount value of the coupon',
            example: 10,
        },
    },
    example: {
        user: 'user-id',
        product: 'product-id',
        expire: '2023-12-31',
        discount: 10,
    },
    required: ['user', 'product', 'expire', 'discount'],
};
exports.favoriteSchema = {
    type: 'object',
    properties: {
        favoriteCategories: {
            type: 'array',
            description: 'The IDs of the categories',
        },
        favoriteCities: {
            type: 'array',
            description: 'The ID of the cities',
        },
    },
    example: {
        favoriteCategories: ['id'],
        favoriteCities: ['id'],
    },
};
//# sourceMappingURL=coupon.swagger.js.map