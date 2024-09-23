"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profitSchema = void 0;
exports.profitSchema = {
    type: 'object',
    properties: {
        value: {
            type: 'string',
            description: 'The value of the profit',
        },
    },
    example: {
        value: '4',
    },
    required: ['value'],
};
//# sourceMappingURL=profits.swagger.js.map