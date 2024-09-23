"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_schema_1 = require("../schema/employee.schema");
const express_1 = require("express");
const employee_controller_1 = require("@controllers/employee.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const uploadingImage_1 = require("@middlewares/uploadingImage");
const passport = require("passport");
const validateResource_1 = require("@middlewares/validateResource");
const router = (0, express_1.Router)();
router.post('/login', (0, validateResource_1.default)(employee_schema_1.loginInput), employee_controller_1.loginEmployee);
router.get('/watchEmployee/:employeeID', passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin', 'employee'), employee_controller_1.watchEmployee);
router
    .route('/')
    .get(employee_controller_1.getAllEmployee)
    .post(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), uploadingImage_1.uploadUserPhoto, (0, validateResource_1.default)(employee_schema_1.employeeSchema), employee_controller_1.createEmployee);
router
    .route('/:id')
    .get(employee_controller_1.getEmployee)
    .patch(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), uploadingImage_1.uploadUserPhoto, uploadingImage_1.resizeUserImage, (0, validateResource_1.default)(employee_schema_1.updateEmployeeSchema), employee_controller_1.updateEmployee)
    .delete(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), employee_controller_1.deleteEmployee);
exports.default = router;
//# sourceMappingURL=employee.routes.js.map