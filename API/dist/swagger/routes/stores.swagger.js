"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSchema = void 0;
exports.storeSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'The name of the store',
        },
        address: {
            type: 'string',
            description: 'The address of the store',
        },
        city: {
            type: 'string',
            description: 'The ID of the city to which the store belongs',
        },
    },
    example: {
        name: 'store name',
        address: 'store address',
        city: 'cityID',
    },
    required: ['name', 'address', 'city'],
};
//# sourceMappingURL=stores.swagger.js.map