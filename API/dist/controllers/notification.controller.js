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
exports.deleteNotification = exports.updateNotification = exports.getNotification = exports.createNotification = exports.getAllNotification = exports.markAsRead = void 0;
const catchAsync_1 = require("@utils/catchAsync");
const handlerFactory_1 = require("./handlerFactory");
const notification_model_1 = require("@models/notification.model");
const helper_types_1 = require("../types/helper.types");
exports.markAsRead = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let { chatId } = req.params;
    if (!chatId)
        chatId = req.body.chat;
    yield notification_model_1.default.updateMany({ chat: chatId, user: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id, read: false }, { read: true });
    res.sendStatus(helper_types_1.STATUS_CODE.SUCCESS);
}));
exports.getAllNotification = (0, handlerFactory_1.getAll)(notification_model_1.default);
exports.createNotification = (0, handlerFactory_1.createOne)(notification_model_1.default);
exports.getNotification = (0, handlerFactory_1.getOne)(notification_model_1.default);
exports.updateNotification = (0, handlerFactory_1.updateOne)(notification_model_1.default);
exports.deleteNotification = (0, handlerFactory_1.deleteOne)(notification_model_1.default);
//# sourceMappingURL=notification.controller.js.map