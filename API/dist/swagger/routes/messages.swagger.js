"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesSchema = void 0;
exports.messagesSchema = {
    type: 'object',
    properties: {
        content: {
            type: 'string',
            description: 'content of the message',
        },
        chat: {
            type: 'string',
            description: 'ChatID',
        },
        user: {
            type: 'string',
            description: 'the user who write the message',
        }
    },
    example: {
        content: 'lalalalb',
        chat: 'chatId',
        user: 'userID',
    },
    required: ['content', 'chat', 'user'],
};
//# sourceMappingURL=messages.swagger.js.map