"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport = require("passport");
const user_controller_1 = require("@controllers/user.controller");
const auth_controller_1 = require("@controllers/auth.controller");
const uploadingImage_1 = require("@middlewares/uploadingImage");
const notification_routes_1 = require("@routes/notification.routes");
const product_routes_1 = require("@routes/product.routes");
const validateResource_1 = require("@middlewares/validateResource");
const user_schema_1 = require("./../schema/user.schema");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.use('/:userId/notifications', notification_routes_1.default);
router.use('/:userId/products', product_routes_1.default);
router.route('/signup').post((0, validateResource_1.default)(user_schema_1.userSchema), auth_controller_1.signup);
router.route('/login').post((0, validateResource_1.default)(user_schema_1.loginInput), (0, auth_controller_1.login)('user'));
router
    .route('/forgotPassword')
    .post((0, validateResource_1.default)(user_schema_1.forgotPasswordSchema), auth_controller_1.forgotPassword);
router
    .route('/resetPassword')
    .get((0, validateResource_1.default)(user_schema_1.resetPasswordSchema), auth_controller_1.isTokenValid)
    .patch((0, validateResource_1.default)(user_schema_1.resetPasswordSchema), auth_controller_1.resetPassword);
router.use(passport.authenticate('jwt', { session: false, failWithError: true }));
router.route('/').get(user_controller_1.getAllUsers);
router
    .route('/me')
    .get(user_controller_1.getMe, user_controller_1.getUser)
    .patch(uploadingImage_1.uploadUserPhoto, uploadingImage_1.resizeUserImage, user_controller_1.updateMe)
    .delete(user_controller_1.deleteMe);
router
    .route('/updateMyPassword')
    .patch((0, validateResource_1.default)(user_schema_1.updatePasswordSchema), auth_controller_1.updateMyPassword);
router.route('/favorites').patch(user_controller_1.updateMe);
router.use((0, auth_middleware_1.restrictTo)('superadmin', 'admin'));
router.patch('/activeToggle', user_controller_1.userToggleActive);
router.route('/:id').get(user_controller_1.getUser).delete(user_controller_1.deleteUser).patch(user_controller_1.updateUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map