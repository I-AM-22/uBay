"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.updateMe = void 0;
exports.updateMe = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        email: { type: 'string' },
    },
    example: {
        name: 'bahaa',
        email: 'bahaa@gmail.com',
    },
};
exports.signUp = {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
    },
    example: {
        name: 'bahaa',
        email: 'bahaa@gmail.com',
        password: 'test1234',
    },
};
//# sourceMappingURL=auth.swagger.js.map