"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatechatSchema = exports.chatSchema = void 0;
exports.chatSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'name of the chat',
        },
        product: {
            type: 'string',
            description: 'The product',
        },
        user: {
            type: 'string',
            description: 'who the user want to talk to him',
        }
    },
    example: {
        name: 'sender',
        product: 'productID',
        user: 'userID',
    },
    required: ['product', 'user'],
};
exports.updatechatSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'name of the chat',
        },
        product: {
            type: 'string',
            description: 'The product',
        },
        seller: {
            type: 'string',
            description: 'who sell the prodcut',
        },
        customer: {
            type: 'string',
            description: 'who the buy the product',
        }
    },
    example: {
        name: 'sender',
        product: 'productID',
        seller: 'userID',
        customer: 'userID',
    },
};
//# sourceMappingURL=chat.swagger.js.map