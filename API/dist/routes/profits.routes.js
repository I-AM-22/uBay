"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProfitPercentag_controller_1 = require("@controllers/ProfitPercentag.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const validateResource_1 = require("@middlewares/validateResource");
const express_1 = require("express");
const passport = require("passport");
const profit_schema_1 = require("../schema/profit.schema");
const router = (0, express_1.Router)();
router.use(passport.authenticate('jwt', { failWithError: true, session: false }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'));
router.get('/', ProfitPercentag_controller_1.getAllProfit);
router.get('/percentage', ProfitPercentag_controller_1.getProfitPercentage);
router.post('/createOrUpdatePercentage', (0, validateResource_1.default)(profit_schema_1.percentageSchema), ProfitPercentag_controller_1.createOrUpdatePercentage);
exports.default = router;
//# sourceMappingURL=profits.routes.js.map