"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const wallet_controller_1 = require("@controllers/wallet.controller");
const passport = require("passport");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const wallet_model_1 = require("@models/wallet.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
const router = express.Router();
router.use(passport.authenticate('jwt', { failWithError: true, session: false }), (0, auth_middleware_1.restrictTo)('admin', 'superadmin', 'employee'));
router.route('/chargeMyWallet').post(wallet_controller_1.chargeMyWallet);
router.get('/:id', (0, handlerFactory_1.getOne)(wallet_model_1.default));
exports.default = router;
//# sourceMappingURL=wallet.routes.js.map