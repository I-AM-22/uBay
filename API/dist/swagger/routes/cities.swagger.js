"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citySchema = void 0;
exports.citySchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'The name of the city',
        },
    },
    example: {
        name: 'City name',
    },
    required: ['name'],
};
//# sourceMappingURL=cities.swagger.js.map