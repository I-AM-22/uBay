"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
exports.productSchema = {
    type: 'object',
    properties: {
        title: { type: 'string', description: 'The title of the product' },
        content: {
            type: 'string',
            description: 'The content of the product',
        },
        photos: {
            type: 'array',
            items: { type: 'string', format: 'binary' },
            description: 'Array of photo URLs for the product',
        },
        price: { type: 'number', description: 'The price of the product' },
        category: {
            type: 'string',
            description: 'The ID of the category to which the product belongs',
        },
        store: {
            type: 'string',
            description: 'The ID of the store to which the product will delivery',
        },
    },
    example: {
        title: 'Product title',
        content: 'Product content',
        user: 'user-id',
        photos: ['https://photo1.jpg', 'https://photo2.jpg'],
        price: 99,
        category: 'category-id',
        likes: 10,
        likedBy: [],
        likedByMe: false,
        store: "IdStore"
    },
    required: ['content', 'photos', 'price', 'category', 'title', 'store'],
};
//# sourceMappingURL=products.swagger.js.map