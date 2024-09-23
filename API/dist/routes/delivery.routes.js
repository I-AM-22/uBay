"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delivery_controller_1 = require("@controllers/delivery.controller");
const passport = require("passport");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const express_1 = require("express");
const validateResource_1 = require("@middlewares/validateResource");
const delivery_schema_1 = require("../schema/delivery.schema");
const delivery_schema_2 = require("../schema/delivery.schema");
const router = (0, express_1.Router)();
router.use(passport.authenticate('jwt', { session: false, failWithError: true }));
router
    .route('/')
    .get((0, auth_middleware_1.restrictTo)('employee', 'admin', 'superadmin'), delivery_controller_1.getAllDeliveries);
router.route('/:id').get((0, auth_middleware_1.restrictTo)('employee'), delivery_controller_1.getDelivery);
router.post('/generateQrForSeller', (0, auth_middleware_1.restrictTo)('user'), (0, validateResource_1.default)(delivery_schema_2.QrSchema), delivery_controller_1.generateQrForSeller);
router.post('/generateQrForCustomer', (0, auth_middleware_1.restrictTo)('user'), (0, validateResource_1.default)(delivery_schema_2.QrSchema), delivery_controller_1.generateQrForCustomer);
router.post('/receive', (0, auth_middleware_1.restrictTo)('employee'), (0, validateResource_1.default)(delivery_schema_1.deliverySchema), delivery_controller_1.receive);
exports.default = router;
//# sourceMappingURL=delivery.routes.js.map