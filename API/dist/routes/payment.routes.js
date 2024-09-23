"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payment_controller_1 = require("@controllers/payment.controller");
const express = require("express");
const passport = require("passport");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const validateResource_1 = require("@middlewares/validateResource");
const payment_schema_1 = require("../schema/payment.schema");
const router = express.Router();
router
    .route('/')
    .get(passport.authenticate('jwt', { failWithError: true, session: false }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin', 'employee'), payment_controller_1.getAllPayment)
    .post(passport.authenticate('jwt', { failWithError: true, session: false }), (0, auth_middleware_1.restrictTo)('user'), (0, validateResource_1.default)(payment_schema_1.paymentSchema), payment_controller_1.hasCoupon, payment_controller_1.createPayment);
router
    .route('/:id')
    .get(passport.authenticate('jwt', { failWithError: true, session: false }), payment_controller_1.getPayment)
    .delete(passport.authenticate('jwt', { failWithError: true, session: false }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin', 'employee'), payment_controller_1.deletePayment);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map