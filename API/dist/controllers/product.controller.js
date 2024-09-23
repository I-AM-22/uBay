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
exports.getAllPros = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getAllProducts = exports.checkIsOwnerProduct = exports.filterCoupon = exports.checkProductIsPaid = exports.myProduct = exports.dislike = exports.like = void 0;
const product_model_1 = require("@models/product.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const catchAsync_1 = require("@utils/catchAsync");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const delivery_model_1 = require("@models/delivery.model");
const aggregateFeatures_1 = require("@utils/aggregateFeatures");
const mongoose_1 = require("mongoose");
exports.like = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield product_model_1.default.findByIdAndUpdate(req.params.id, {
        $addToSet: { likedBy: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id },
    });
    res.sendStatus(helper_types_1.STATUS_CODE.SUCCESS);
}));
exports.dislike = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const product = yield product_model_1.default.findByIdAndUpdate(req.params.id, { $pull: { likedBy: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id } }, { new: true, runValidators: true });
    if (!product) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], `No Product found with that ID`));
    }
    res.sendStatus(helper_types_1.STATUS_CODE.SUCCESS);
}));
exports.myProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { isBuy } = req.query;
    let pipeline = [];
    let unpaid;
    if (isBuy == 'false') {
        unpaid = yield product_model_1.default.aggregate([
            { $match: { is_paid: false, user: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id } },
            {
                $lookup: {
                    from: 'coupons',
                    localField: 'coupons',
                    foreignField: '_id',
                    as: 'coupons',
                },
            },
            {
                $unwind: { path: '$coupons', preserveNullAndEmptyArrays: true },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'coupons.user',
                    foreignField: '_id',
                    as: 'coupons.user',
                },
            },
            {
                $unwind: { path: '$coupons.user', preserveNullAndEmptyArrays: true },
            },
            {
                $group: {
                    _id: '$_id',
                    title: { $first: '$title' },
                    photos: { $first: '$photos' },
                    price: { $first: '$price' },
                    category: { $first: '$category' },
                    store: { $first: '$store' },
                    coupons: {
                        $push: {
                            $cond: {
                                if: { $eq: ['$coupons', {}] },
                                then: '$$REMOVE',
                                else: {
                                    _id: '$coupons._id',
                                    expire: '$coupons.expire',
                                    discount: '$coupons.discount',
                                    active: '$coupons.active',
                                    user: '$coupons.userDetails',
                                },
                            },
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    price: 1,
                    photos: 1,
                    category: 1,
                    store: 1,
                    coupons: {
                        _id: 1,
                        user: { _id: 1, name: 1, photo: 1 },
                        expire: 1,
                        active: 1,
                        discount: 1,
                    },
                },
            },
        ]);
        pipeline = [
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
                    from: 'wallets',
                    localField: 'product.user.wallet',
                    foreignField: '_id',
                    as: 'product.user.wallet',
                },
            },
            {
                $unwind: '$product.user.wallet',
            },
            {
                $match: {
                    'product.user._id': (_b = req.user) === null || _b === void 0 ? void 0 : _b._id,
                },
            },
            {
                $lookup: {
                    from: 'coupons',
                    let: { couponIds: '$product.coupons' },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: ['$_id', '$$couponIds'],
                                },
                            },
                        },
                    ],
                    as: 'product.coupons',
                },
            },
            {
                $project: {
                    _id: 1,
                    payment: {
                        _id: 1,
                        price_after: '$payment.price',
                        is_discount: 1,
                        createdAt: 1,
                    },
                    customer: { name: 1, _id: 1, photo: 1 },
                    createdAt: 1,
                    customer_date: 1,
                    seller_date: 1,
                    delivery_status: 1,
                    product: {
                        _id: 1,
                        title: 1,
                        price: 1,
                        photos: 1,
                        category: 1,
                        store: 1,
                    },
                },
            },
            {
                $facet: {
                    wait: [
                        { $match: { delivery_status: 'wait' } },
                        { $unset: 'delivery_status' },
                    ],
                    seller: [
                        { $match: { delivery_status: 'seller' } },
                        { $unset: 'delivery_status' },
                    ],
                    customer: [
                        { $match: { delivery_status: 'customer' } },
                        { $unset: 'delivery_status' },
                    ],
                },
            },
        ];
    }
    else {
        pipeline = [
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
                    as: 'seller',
                },
            },
            {
                $unwind: { path: '$seller', preserveNullAndEmptyArrays: true },
            },
            {
                $match: {
                    'payment.customer': (_c = req.user) === null || _c === void 0 ? void 0 : _c._id,
                },
            },
            {
                $lookup: {
                    from: 'coupons',
                    let: { couponIds: '$product.coupons' },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $in: ['$_id', '$$couponIds'] },
                                        {
                                            $eq: [
                                                '$user',
                                                new mongoose_1.default.Types.ObjectId((_d = req.user) === null || _d === void 0 ? void 0 : _d.id),
                                            ],
                                        },
                                        {
                                            $or: [
                                                { $gt: ['$expire', new Date()] },
                                                { $eq: ['$expire', null] },
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                    as: 'product.coupons',
                },
            },
            {
                $project: {
                    _id: 1,
                    payment: {
                        _id: 1,
                        price_after: '$payment.price',
                        is_discount: 1,
                        createdAt: 1,
                    },
                    seller: { name: 1, _id: 1, photo: 1 },
                    createdAt: 1,
                    customer_date: 1,
                    seller_date: 1,
                    product: {
                        _id: 1,
                        title: 1,
                        price: 1,
                        photos: 1,
                        category: 1,
                        store: 1,
                        coupons: 1,
                    },
                    delivery_status: 1,
                },
            },
            {
                $facet: {
                    wait: [
                        { $match: { delivery_status: 'wait' } },
                        { $unset: 'delivery_status' },
                    ],
                    seller: [
                        { $match: { delivery_status: 'seller' } },
                        { $unset: 'delivery_status' },
                    ],
                    customer: [
                        { $match: { delivery_status: 'customer' } },
                        { $unset: 'delivery_status' },
                    ],
                },
            },
        ];
    }
    const products = yield delivery_model_1.default.aggregate(pipeline);
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(Object.assign(Object.assign({}, products[0]), { unpaid }));
}));
exports.checkProductIsPaid = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const productDoc = yield product_model_1.default.findById(id);
    if (productDoc === null || productDoc === void 0 ? void 0 : productDoc.is_paid) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.BAD_REQUEST, [], 'لا يمكنك تعديل منتج تم بيعه'));
    }
    next();
}));
exports.filterCoupon = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let doc = req.body.doc;
    doc.coupons = doc.coupons.filter((coupon) => {
        var _a;
        return (coupon.user !== null &&
            coupon.user._id !== null &&
            coupon.user._id.toString() === ((_a = req.user) === null || _a === void 0 ? void 0 : _a._id.toString()));
    });
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(doc);
}));
exports.checkIsOwnerProduct = (0, auth_middleware_1.checkIsOwner)(product_model_1.default);
exports.getAllProducts = (0, handlerFactory_1.getAll)(product_model_1.default);
exports.getProduct = (0, handlerFactory_1.getOne)(product_model_1.default);
exports.createProduct = (0, handlerFactory_1.createOne)(product_model_1.default);
exports.updateProduct = (0, handlerFactory_1.updateOne)(product_model_1.default);
exports.deleteProduct = (0, handlerFactory_1.deleteOne)(product_model_1.default);
exports.getAllPros = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = req.user;
    const aggregateFeatures = new aggregateFeatures_1.default(req.query);
    aggregateFeatures
        .match({})
        .lookup({
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
    })
        .lookup({
        from: 'coupons',
        let: { couponIds: '$coupons' },
        pipeline: [
            {
                $match: {
                    $expr: {
                        $and: [
                            { $in: ['$_id', '$$couponIds'] },
                            { $eq: ['$user', new mongoose_1.default.Types.ObjectId((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)] },
                            {
                                $or: [
                                    { $gt: ['$expire', new Date()] },
                                    { $eq: ['$expire', null] },
                                ],
                            },
                        ],
                    },
                },
            },
        ],
        as: 'coupons',
    })
        .lookup({
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
    })
        .lookup({
        from: 'stores',
        localField: 'store',
        foreignField: '_id',
        as: 'store',
    })
        .unwind('$category')
        .unwind('$user')
        .unwind('$store')
        .lookup({
        from: 'cities',
        localField: 'store.city',
        foreignField: '_id',
        as: 'store.city',
    })
        .unwind('$store.city')
        .match({ 'user.active': { $ne: false } })
        .search()
        .sort({ createdAt: -1 })
        .addFields({
        sortField: {
            $switch: {
                branches: [
                    {
                        case: {
                            $and: [
                                { $in: ['$category._id', user === null || user === void 0 ? void 0 : user.favoriteCategories] },
                                { $in: ['$store.city', user.favoriteCities] },
                            ],
                        },
                        then: 0,
                    },
                    {
                        case: {
                            $or: [
                                { $in: ['$category._id', user === null || user === void 0 ? void 0 : user.favoriteCategories] },
                                { $in: ['$store.city', user.favoriteCities] },
                            ],
                        },
                        then: 1,
                    },
                ],
                default: 2,
            },
        },
    })
        .group({
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        docs: {
            $push: '$$ROOT',
        },
    })
        .unwind('$docs')
        .sort({ 'docs.sortField': 1 })
        .group({
        _id: '$_id',
        docs: { $push: '$docs' },
    })
        .sort({ _id: -1 })
        .group({
        _id: null,
        combinedDocs: { $push: '$docs' },
    })
        .addFields({
        combinedDocs: {
            $reduce: {
                input: '$combinedDocs',
                initialValue: [],
                in: { $concatArrays: ['$$value', '$$this'] },
            },
        },
    })
        .unwind('$combinedDocs')
        .replaceRoot({
        newRoot: '$combinedDocs',
    })
        .filter('store.city')
        .addFields({
        likes: { $size: '$likedBy' },
    })
        .project({
        title: 1,
        content: 1,
        user: { photo: 1, name: 1, _id: 1, id: 1 },
        coupons: 1,
        likes: 1,
        photos: 1,
        price: 1,
        category: { name: 1, description: 1, _id: 1, id: 1 },
        _id: 1,
        is_paid: 1,
        createdAt: 1,
        updatedAt: 1,
        id: 1,
        likedBy: 1,
        likedByMe: 1,
        comments: 1,
        store: {
            _id: 1,
            name: 1,
            city: {
                _id: 1,
                name: 1
            }
        }
    })
        .addFields({
        likedByMe: {
            $switch: {
                branches: [
                    {
                        case: {
                            $in: [user._id, '$likedBy'],
                        },
                        then: true,
                    },
                ],
                default: false,
            },
        },
    })
        .facet();
    let result = yield aggregateFeatures.build(product_model_1.default);
    res.status(200).json(result);
}));
//# sourceMappingURL=product.controller.js.map