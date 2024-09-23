"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_schema_1 = require("./../schema/store.schema");
const express_1 = require("express");
const store_controller_1 = require("@controllers/store.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const passport = require("passport");
const validateResource_1 = require("@middlewares/validateResource");
const router = (0, express_1.Router)();
router.use(passport.authenticate('jwt', { session: false, failWithError: true }));
router.get('/:storeID/getAllproduct', (0, auth_middleware_1.restrictTo)('employee', 'admin', 'superadmin'), store_controller_1.getAllproductInstore);
router
    .route('/')
    .get(store_controller_1.getAllStores)
    .post((0, auth_middleware_1.restrictTo)('superadmin', 'admin'), (0, validateResource_1.default)(store_schema_1.storeSchema), store_controller_1.createStore);
router
    .route('/:id')
    .get(store_controller_1.getStore)
    .patch((0, auth_middleware_1.restrictTo)('superadmin', 'admin'), store_controller_1.updateStore)
    .delete((0, auth_middleware_1.restrictTo)('superadmin', 'admin'), store_controller_1.deleteStore);
exports.default = router;
//# sourceMappingURL=store.routes.js.map