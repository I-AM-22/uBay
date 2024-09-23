"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport = require("passport");
const message_routes_1 = require("@routes/message.routes");
const notification_routes_1 = require("@routes/notification.routes");
const chat_controller_1 = require("@controllers/chat.controller");
const validateResource_1 = require("@middlewares/validateResource");
const chat_schema_1 = require("./../schema/chat.schema");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.use('/:chatId/messages', message_routes_1.default);
router.use('/:chatId/notifications', notification_routes_1.default);
router.use(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('user', 'superadmin'));
router
    .route('/')
    .get(chat_controller_1.getAllChats)
    .post((0, validateResource_1.default)(chat_schema_1.chatSchema), chat_controller_1.isSeller, chat_controller_1.accessChat);
router.route('/:id').get(chat_controller_1.getChat).patch(chat_controller_1.updateChat).delete(chat_controller_1.deleteChat);
exports.default = router;
//# sourceMappingURL=chat.routes.js.map