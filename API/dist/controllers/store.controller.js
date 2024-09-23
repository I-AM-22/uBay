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
exports.getAllproductInstore = exports.deleteStore = exports.updateStore = exports.createStore = exports.getStore = exports.getAllStores = void 0;
const handlerFactory_1 = require("@controllers/handlerFactory");
const store_model_1 = require("@models/store.model");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("../types/helper.types");
const delivery_model_1 = require("@models/delivery.model");
const mongoose_1 = require("mongoose");
exports.getAllStores = (0, handlerFactory_1.getAll)(store_model_1.default);
exports.getStore = (0, handlerFactory_1.getOne)(store_model_1.default);
exports.createStore = (0, handlerFactory_1.createOne)(store_model_1.default);
exports.updateStore = (0, handlerFactory_1.updateOne)(store_model_1.default);
exports.deleteStore = (0, handlerFactory_1.deleteOne)(store_model_1.default);
exports.getAllproductInstore = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { storeID } = req.params;
    let pipeline = [
        {
            $match: {
                delivery_status: 'seller',
                store: new mongoose_1.default.Types.ObjectId(storeID),
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
                from: 'employees',
                localField: 'employee_seller',
                foreignField: '_id',
                as: 'employee_seller',
            },
        },
        {
            $unwind: { path: '$employee_seller', preserveNullAndEmptyArrays: true },
        },
        {
            $project: {
                Product: {
                    _id: '$product._id',
                    title: '$product.title',
                    content: '$product.content',
                    price: '$product.price',
                    photos: '$product.photos',
                    user: {
                        _id: '$product.user._id',
                        name: '$product.user.name',
                        photo: '$product.user.photo',
                    },
                    createdAt: '$product.createdAt',
                },
                Customer: {
                    _id: '$customer._id',
                    name: '$customer.name',
                    photo: '$customer.photo',
                },
                Employee: {
                    _id: '$employee_seller._id',
                    name: '$employee_seller.name',
                    photo: '$employee_seller.photo',
                },
            },
        },
    ];
    const products = yield delivery_model_1.default.aggregate(pipeline);
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(products);
}));
//# sourceMappingURL=store.controller.js.map