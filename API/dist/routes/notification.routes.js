"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("@middlewares/auth.middleware");
const notification_controller_1 = require("@controllers/notification.controller");
const express_1 = require("express");
const passport = require("passport");
const router = (0, express_1.Router)({ mergeParams: true });
router.use(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('user'));
router.route('/').get(notification_controller_1.getAllNotification).post(notification_controller_1.createNotification);
router.patch('/read', notification_controller_1.markAsRead);
router
    .route('/:id')
    .get(notification_controller_1.getNotification)
    .delete(notification_controller_1.deleteNotification)
    .patch(notification_controller_1.updateNotification);
exports.default = router;
//# sourceMappingURL=notification.routes.js.map