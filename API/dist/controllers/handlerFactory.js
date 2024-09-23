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
exports.getAll = exports.getOne = exports.createOne = exports.updateOne = exports.deleteOne = void 0;
const apiFeatures_1 = require("../utils/apiFeatures");
const appError_1 = require("../utils/appError");
const catchAsync_1 = require("../utils/catchAsync");
const helper_types_1 = require("../types/helper.types");
const a = 10;
const deleteOne = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const doc = yield Model.findByIdAndRemove(id);
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], `No ${modelName} found with that Id`));
    }
    res.sendStatus(helper_types_1.STATUS_CODE.DELETED);
}));
exports.deleteOne = deleteOne;
const updateOne = (Model) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const { body } = req;
    if ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename)
        body.photo = req.file.filename;
    const doc = yield Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], `No ${modelName} found with that Id`));
    }
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(doc);
}));
exports.updateOne = updateOne;
const createOne = (Model, addFiled) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (addFiled)
        req.body = Object.assign(Object.assign({}, req.body), addFiled);
    if ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename)
        req.body.photo = req.file.filename;
    const newDoc = yield Model.create(req.body);
    if (Model.modelName === 'User') {
        newDoc.password = undefined;
        newDoc.includeInActive = undefined;
    }
    if (Model.modelName === 'Message') {
        let { content, _id, createdAt, user } = newDoc;
        res.status(helper_types_1.STATUS_CODE.CREATED).json({ content, _id, createdAt, user });
    }
    else {
        res.status(helper_types_1.STATUS_CODE.CREATED).json(newDoc);
    }
}));
exports.createOne = createOne;
const getOne = (Model, ...popOptions) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = Model.findById(req.params.id);
    if (popOptions)
        query.populate(popOptions);
    const doc = yield query;
    const modelName = `${Model.modelName.toLowerCase()}`;
    if (!doc) {
        return next(new appError_1.default(helper_types_1.STATUS_CODE.NOT_FOUND, [], `No ${modelName} with that Id`));
    }
    if (Model.modelName === 'Product') {
        req.body.doc = doc;
        return next();
    }
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(doc);
}));
exports.getOne = getOne;
const getAll = (Model, path) => (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let query = Model.find();
    let counter = Model.find();
    if (req.params.userId) {
        query = query.where('user').equals(req.params.userId);
        counter = counter.where('user').equals(req.params.userId);
    }
    if (req.params.chatId) {
        query = query.where('chat').equals(req.params.chatId);
        counter = counter.where('chat').equals(req.params.chatId);
    }
    if (req.params.categoryId) {
        query = query.where('category').equals(req.params.categoryId);
        counter = counter.where('category').equals(req.params.categoryId);
    }
    if (req.params.productId) {
        query = query.where('product').equals(req.params.productId);
        counter = counter.where('product').equals(req.params.productId);
    }
    if (Model.modelName === 'User') {
        const { filter, select } = Model.filter(path, req.user);
        query = query.find(filter).select(select);
        counter = counter.where(filter);
    }
    if (Model.modelName === 'Product') {
        const { is_paid } = req.query;
        if (is_paid == 'true') {
            query = query.find({ is_paid: true });
            counter = counter.find({ is_paid: true });
        }
        else if (is_paid == 'false') {
            query = query.find({ is_paid: false });
            counter = counter.find({ is_paid: false });
        }
    }
    if (Model.modelName === 'Message') {
        query = query.find({}).select({ chat: 0, updatedAt: 0, id: 0 });
    }
    const countFeature = new apiFeatures_1.default(counter, req.query).filter();
    const feature = new apiFeatures_1.default(query, req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        .search();
    const docs = yield feature.query;
    const totalDataCount = (yield countFeature.query).length;
    let result = { totalDataCount, data: docs };
    if (req.query.page) {
        const totalPages = Math.ceil(totalDataCount / Number(req.query.limit));
        result = Object.assign({ pageNumber: +req.query.page, totalPages }, result);
    }
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(result);
}));
exports.getAll = getAll;
//# sourceMappingURL=handlerFactory.js.map