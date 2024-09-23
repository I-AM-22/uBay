"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.CreateMessage = exports.getMessage = exports.getAllMessages = exports.checkIsOwnerMessage = void 0;
const message_model_1 = require("@models/message.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
const auth_middleware_1 = require("@middlewares/auth.middleware");
exports.checkIsOwnerMessage = (0, auth_middleware_1.checkIsOwner)(message_model_1.default);
exports.getAllMessages = (0, handlerFactory_1.getAll)(message_model_1.default);
exports.getMessage = (0, handlerFactory_1.getOne)(message_model_1.default);
exports.CreateMessage = (0, handlerFactory_1.createOne)(message_model_1.default);
exports.updateMessage = (0, handlerFactory_1.updateOne)(message_model_1.default);
exports.deleteMessage = (0, handlerFactory_1.deleteOne)(message_model_1.default);
//# sourceMappingURL=message.controller.js.map