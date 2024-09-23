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
exports.getStatistics = void 0;
const employee_model_1 = require("@models/employee.model");
const product_model_1 = require("@models/product.model");
const user_model_1 = require("@models/user.model");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("./../types/helper.types");
const store_model_1 = require("@models/store.model");
const comment_model_1 = require("@models/comment.model");
const delivery_model_1 = require("@models/delivery.model");
const profit_model_1 = require("@models/profit.model");
exports.getStatistics = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.countDocuments({ role: 'user' });
    const products = yield product_model_1.default.countDocuments({});
    const employees = yield employee_model_1.default.countDocuments();
    const stores = yield store_model_1.default.countDocuments();
    const soldProducts = yield product_model_1.default.countDocuments({ is_paid: true });
    const salesPercentage = (soldProducts / products) * 100;
    const salesPerCategory = yield product_model_1.default.aggregate([
        { $match: { is_paid: true } },
        {
            $group: {
                _id: '$category',
                categoryCount: { $sum: 1 },
                avgPrice: { $avg: '$price' },
                minPrice: { $min: '$price' },
                maxPrice: { $max: '$price' },
            },
        },
        {
            $project: {
                category: '$_id',
                _id: 0,
                categoryCount: 1,
                avgPrice: 1,
                minPrice: 1,
                maxPrice: 1,
            },
        },
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'categoryDetails',
            },
        },
        {
            $unwind: '$categoryDetails',
        },
        {
            $addFields: {
                categoryName: '$categoryDetails.name',
            },
        },
        {
            $unset: ['categoryDetails', '_id', 'category'],
        },
        {
            $addFields: {
                categoryPercentage: {
                    $multiply: [{ $divide: ['$categoryCount', soldProducts] }, 100],
                },
            },
        },
    ]);
    const commentsCountByDay = yield comment_model_1.default.aggregate([
        { $match: {} },
        {
            $group: {
                _id: {
                    $dateToString: { format: '%m-%d', date: '$createdAt' },
                },
                count: { $sum: 1 },
            },
        },
    ]);
    const productsCountByDay = yield product_model_1.default.aggregate([
        { $match: {} },
        {
            $group: {
                _id: {
                    $dateToString: { format: '%m-%d', date: '$createdAt' },
                },
                count: { $sum: 1 },
            },
        },
    ]);
    const deliveriesCountByDay = yield delivery_model_1.default.aggregate([
        {
            $match: { delivery_status: 'customer' },
        },
        {
            $group: {
                _id: {
                    $dateToString: { format: '%m-%d', date: '$createdAt' },
                },
                count: { $sum: 1 },
            },
        },
    ]);
    const result = {};
    commentsCountByDay.forEach((entry) => {
        const date = entry._id;
        if (!result[date]) {
            result[date] = {};
        }
        result[date].comments = entry.count;
    });
    productsCountByDay.forEach((entry) => {
        const date = entry._id;
        if (!result[date]) {
            result[date] = {};
        }
        result[date].products = entry.count;
    });
    deliveriesCountByDay.forEach((entry) => {
        const date = entry._id;
        if (!result[date]) {
            result[date] = {};
        }
        result[date].soldProducts = entry.count;
    });
    let byDay = [];
    for (const day in result) {
        const value = result[day];
        byDay.push(Object.assign({ day }, value));
    }
    const currentDate = new Date();
    const last7Days = new Date();
    last7Days.setDate(currentDate.getDate() - 6);
    const profits = yield profit_model_1.default.aggregate([
        {
            $match: {
                createdAt: { $gte: last7Days },
            },
        },
        {
            $group: {
                _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                totalValue: { $sum: '$value' },
            },
        },
        {
            $project: {
                _id: 0,
                date: '$_id',
                totalValue: 1,
            },
        },
    ]);
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json({
        users,
        employees,
        stores,
        products,
        soldProducts,
        salesPercentage,
        salesPerCategory,
        byDay,
        profits,
    });
}));
//# sourceMappingURL=statistics.controller.js.map