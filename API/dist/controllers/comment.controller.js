"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComment = exports.getAllComments = exports.checkIsOwnerComment = void 0;
const comment_model_1 = require("@models/comment.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
const auth_middleware_1 = require("@middlewares/auth.middleware");
exports.checkIsOwnerComment = (0, auth_middleware_1.checkIsOwner)(comment_model_1.default);
exports.getAllComments = (0, handlerFactory_1.getAll)(comment_model_1.default);
exports.getComment = (0, handlerFactory_1.getOne)(comment_model_1.default);
exports.createComment = (0, handlerFactory_1.createOne)(comment_model_1.default);
exports.updateComment = (0, handlerFactory_1.updateOne)(comment_model_1.default);
exports.deleteComment = (0, handlerFactory_1.deleteOne)(comment_model_1.default);
//# sourceMappingURL=comment.controller.js.map