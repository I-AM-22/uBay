"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("@controllers/category.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const passport = require("passport");
const category_controller_2 = require("@controllers/category.controller");
const product_routes_1 = require("@routes/product.routes");
const validateResource_1 = require("@middlewares/validateResource");
const category_schema_1 = require("./../schema/category.schema");
const router = (0, express_1.Router)();
router.use('/:categoryId/products', product_routes_1.default);
router
    .route('/')
    .get(category_controller_2.getAllCategories)
    .post(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), (0, validateResource_1.default)(category_schema_1.categorySchema), category_controller_1.createCategory);
router
    .route('/:id')
    .get(category_controller_1.getCategory)
    .patch(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), category_controller_1.updateCategory)
    .delete(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), category_controller_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=category.routes.js.map