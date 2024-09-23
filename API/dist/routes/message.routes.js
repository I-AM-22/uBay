"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport = require("passport");
const message_controller_1 = require("@controllers/message.controller");
const validateResource_1 = require("@middlewares/validateResource");
const message_schema_1 = require("./../schema/message.schema");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const helper_middleware_1 = require("@middlewares/helper.middleware");
const router = (0, express_1.Router)({ mergeParams: true });
router.use(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('user'));
router
    .route('/')
    .get(message_controller_1.getAllMessages)
    .post((0, helper_middleware_1.setIds)('chatId'), (0, validateResource_1.default)(message_schema_1.messageSchema), message_controller_1.CreateMessage);
router
    .route('/:id')
    .get(message_controller_1.getMessage)
    .patch(message_controller_1.checkIsOwnerMessage, message_controller_1.updateMessage)
    .delete(message_controller_1.checkIsOwnerMessage, message_controller_1.deleteMessage);
exports.default = router;
//# sourceMappingURL=message.routes.js.map