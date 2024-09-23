"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statistics_controller_1 = require("@controllers/statistics.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const express_1 = require("express");
const passport = require("passport");
const router = (0, express_1.Router)();
router.use(passport.authenticate('jwt', { failWithError: true, session: false }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'));
router.get('/', statistics_controller_1.getStatistics);
exports.default = router;
//# sourceMappingURL=statistics.routes.js.map