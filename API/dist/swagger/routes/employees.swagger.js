"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSchema = void 0;
exports.employeeSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            description: 'The name of the store',
        },
        email: {
            type: 'string',
            description: 'The email of the employee',
        },
        password: {
            type: 'string',
            description: 'The password of the employee',
        },
        address: {
            type: 'string',
            description: 'The address of the employee',
        },
        store: {
            type: 'string',
            description: 'The ID of the store to which the employee belongs',
        },
    },
    example: {
        name: 'employeeName',
        email: 'ibrahim@gmail.com',
        password: 'test1234',
        store: 'storeID',
        address: 'store address',
    },
};
//# sourceMappingURL=employees.swagger.js.map