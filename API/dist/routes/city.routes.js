"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_schema_1 = require("./../schema/city.schema");
const express_1 = require("express");
const city_controller_1 = require("@controllers/city.controller");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const passport = require("passport");
const validateResource_1 = require("@middlewares/validateResource");
const router = (0, express_1.Router)();
router
    .route('/')
    .get(city_controller_1.getAllCities)
    .post(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), (0, validateResource_1.default)(city_schema_1.citySchema), city_controller_1.createCity);
router
    .route('/:id')
    .get(city_controller_1.getCity)
    .patch(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), city_controller_1.updateCity)
    .delete(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('superadmin', 'admin'), city_controller_1.deleteCity);
exports.default = router;
//# sourceMappingURL=city.routes.js.map