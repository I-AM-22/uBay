"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const admin_controller_1 = require("@controllers/admin.controller");
const passport = require("passport");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const auth_controller_1 = require("@controllers/auth.controller");
const router = express.Router();
router.post('/login', (0, auth_controller_1.login)('admin'));
router.use(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin'));
router.get('/', admin_controller_1.getAllAdmins);
router.get('/:id', admin_controller_1.getAdmin);
router.post('/', admin_controller_1.createAdmin);
router.patch('/:id', admin_controller_1.updateAdmin);
router.delete('/:id', admin_controller_1.deleteAdmin);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map