"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
exports.commentSchema = {
    type: 'object',
    properties: {
        content: {
            type: 'string',
            description: 'The content of the comment',
            example: 'This is a comment',
        },
        user: {
            type: 'string',
            description: 'The ID of the user creating the comment',
            example: 'user-id',
        },
        product: {
            type: 'string',
            description: 'The ID of the product the comment belongs to',
            example: 'product-id',
        },
    },
    example: {
        content: 'Comment content',
        user: 'user-id',
        product: 'product-id',
    },
    required: ['content', 'product'],
};
//# sourceMappingURL=comments.swagger.js.map