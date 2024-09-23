"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchEmployee = exports.loginEmployee = exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployee = exports.getAllEmployee = void 0;
const handlerFactory_1 = require("@controllers/handlerFactory");
const catchAsync_1 = require("@utils/catchAsync");
const cls_hooked_1 = require("cls-hooked");
const jwt_utils_1 = require("@utils/jwt.utils");
const helper_types_1 = require("../types/helper.types");
const appError_1 = require("@utils/appError");
const employee_model_1 = require("@models/employee.model");
const delivery_model_1 = require("@models/delivery.model");
exports.getAllEmployee = (0, handlerFactory_1.getAll)(employee_model_1.default);
exports.getEmployee = (0, handlerFactory_1.getOne)(employee_model_1.default);
exports.createEmployee = (0, handlerFactory_1.createOne)(employee_model_1.default);
exports.updateEmployee = (0, handlerFactory_1.updateOne)(employee_model_1.default);
exports.deleteEmployee = (0, handlerFactory_1.deleteOne)(employee_model_1.default);
const sendEmployee = (employee, statusCode, res) => {
    const namespace = cls_hooked_1.default.getNamespace('app');
    const token = (0, jwt_utils_1.signJwt)(employee.id.toString());
    employee.password = undefined;
    namespace === null || namespace === void 0 ? void 0 : namespace.set('loggedInEmployeeId', employee.id);
    res.status(statusCode).send({
        token,
        employee,
    });
};
exports.loginEmployee = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const employee = yield employee_model_1.default.findOne({ email }).select('+password ');
    if (!employee || !(yield employee.correctPassword(password))) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'كلمة المرور او البريد الالكتروني غير صحيح'));
    }
    sendEmployee(employee, helper_types_1.STATUS_CODE.SUCCESS, res);
}));
exports.watchEmployee = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID } = req.params;
    const employeeDoc = yield employee_model_1.default.findById(employeeID);
    if (!employeeDoc) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.UNAUTHORIZE, [], 'هذا الموظف غير موجود'));
    }
    let pipeline1 = [
        {
            $match: {
                employee_seller: employeeDoc._id,
            },
        },
        {
            $lookup: {
                from: 'payments',
                localField: 'payment',
                foreignField: '_id',
                as: 'payment',
            },
        },
        {
            $unwind: '$payment',
        },
        {
            $lookup: {
                from: 'products',
                localField: 'payment.product',
                foreignField: '_id',
                as: 'product',
            },
        },
        {
            $unwind: '$product',
        },
        {
            $lookup: {
                from: 'users',
                localField: 'product.user',
                foreignField: '_id',
                as: 'product.user',
            },
        },
        {
            $unwind: '$product.user',
        },
        {
            $lookup: {
                from: 'users',
                localField: 'payment.customer',
                foreignField: '_id',
                as: 'customer',
            },
        },
        {
            $unwind: '$customer',
        },
        {
            $lookup: {
                from: 'employees',
                localField: 'employee_seller',
                foreignField: '_id',
                as: 'employee_seller',
            },
        },
        {
            $unwind: '$employee_seller',
        },
        {
            $project: {
                product: {
                    _id: 1,
                    content: 1,
                    title: 1,
                    photos: 1,
                    price: 1,
                    user: { _id: 1, name: 1, photo: 1 },
                },
                customer: { _id: 1, name: 1, photo: 1 },
                employee_seller: { _id: 1, name: 1, photo: 1 },
                receive_date: '$seller_date',
            },
        },
        {
            $sort: {
                receive_date: -1,
            },
        },
    ];
    let pipeline2 = [
        {
            $match: {
                employee_customer: employeeDoc._id,
            },
        },
        {
            $lookup: {
                from: 'payments',
                localField: 'payment',
                foreignField: '_id',
                as: 'payment',
            },
        },
        {
            $unwind: '$payment',
        },
        {
            $lookup: {
                from: 'products',
                localField: 'payment.product',
                foreignField: '_id',
                as: 'product',
            },
        },
        {
            $unwind: '$product',
        },
        {
            $lookup: {
                from: 'users',
                localField: 'product.user',
                foreignField: '_id',
                as: 'product.user',
            },
        },
        {
            $unwind: '$product.user',
        },
        {
            $lookup: {
                from: 'users',
                localField: 'payment.customer',
                foreignField: '_id',
                as: 'customer',
            },
        },
        {
            $unwind: '$customer',
        },
        {
            $lookup: {
                from: 'employees',
                localField: 'employee_customer',
                foreignField: '_id',
                as: 'employee_customer',
            },
        },
        {
            $unwind: '$employee_customer',
        },
        {
            $project: {
                product: {
                    _id: 1,
                    content: 1,
                    title: 1,
                    photos: 1,
                    price: 1,
                    user: { _id: 1, name: 1, photo: 1 },
                },
                customer: { _id: 1, name: 1, photo: 1 },
                employee_customer: { _id: 1, name: 1, photo: 1 },
                give_date: '$customer_date',
            },
        },
        {
            $sort: {
                give_date: -1,
            },
        },
    ];
    const products_receive = yield delivery_model_1.default.aggregate(pipeline1);
    const products_give = yield delivery_model_1.default.aggregate(pipeline2);
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json({
        receive: products_receive,
        give: products_give,
    });
}));
//# sourceMappingURL=employee.controller.js.map