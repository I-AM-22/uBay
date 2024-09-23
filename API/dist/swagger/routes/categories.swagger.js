"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
exports.categorySchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'The name of the category',
        },
        description: {
            type: 'string',
            description: 'The description of the category',
        },
    },
    example: {
        description: 'Category description',
        name: 'Category name',
    },
    required: ['name', 'description'],
};
exports.default = exports.categorySchema;
//# sourceMappingURL=categories.swagger.js.map