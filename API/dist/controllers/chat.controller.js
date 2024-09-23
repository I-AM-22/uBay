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
exports.deleteChat = exports.updateChat = exports.CreateChat = exports.getChat = exports.getAllChats = exports.accessChat = exports.isSeller = void 0;
const catchAsync_1 = require("@utils/catchAsync");
const chat_model_1 = require("@models/chat.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
const product_model_1 = require("@models/product.model");
const helper_types_1 = require("../types/helper.types");
const isSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { user, product } = req.body;
    const data = {};
    const isSeller = yield product_model_1.default.findOne({
        _id: product,
        user: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id,
    });
    if (isSeller) {
        data.seller = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
        data.customer = user;
        data.product = product;
    }
    else {
        data.seller = user;
        data.customer = (_c = req.user) === null || _c === void 0 ? void 0 : _c.id;
        data.product = product;
    }
    req.body = data;
    next();
});
exports.isSeller = isSeller;
exports.accessChat = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isChat = yield chat_model_1.default.findOne(req.body);
    if (isChat) {
        return res.status(helper_types_1.STATUS_CODE.SUCCESS).json({ data: isChat });
    }
    const createdChat = yield chat_model_1.default.create(req.body);
    return res.status(helper_types_1.STATUS_CODE.CREATED).json({ chat: createdChat });
}));
exports.getAllChats = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const chats = yield chat_model_1.default.find({
        $or: [{ customer: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id }, { seller: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id }],
    }).sort({
        updatedAt: -1,
    });
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json({ result: chats.length, data: chats });
}));
exports.getChat = (0, handlerFactory_1.getOne)(chat_model_1.default);
exports.CreateChat = (0, handlerFactory_1.createOne)(chat_model_1.default);
exports.updateChat = (0, handlerFactory_1.updateOne)(chat_model_1.default);
exports.deleteChat = (0, handlerFactory_1.deleteOne)(chat_model_1.default);
//# sourceMappingURL=chat.controller.js.map