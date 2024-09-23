"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_middleware_1 = require("@middlewares/auth.middleware");
const coupon_controller_1 = require("@controllers/coupon.controller");
const passport = require("passport");
const validateResource_1 = require("@middlewares/validateResource");
const coupon_schema_1 = require("./../schema/coupon.schema");
const product_controller_1 = require("@controllers/product.controller");
const coupon_controller_2 = require("../controllers/coupon.controller");
const router = express.Router({ mergeParams: true });
router.use(passport.authenticate('jwt', { session: false, failWithError: true }), (0, auth_middleware_1.restrictTo)('user'));
router.get('/myCoupons', coupon_controller_1.getMyCoupons, coupon_controller_1.getCoupons);
router
    .route('/')
    .get(coupon_controller_2.getProductCoupons, product_controller_1.checkIsOwnerProduct, coupon_controller_1.getCoupons)
    .post((0, validateResource_1.default)(coupon_schema_1.couponSchema), coupon_controller_2.getProductCoupons, product_controller_1.checkIsOwnerProduct, coupon_controller_1.createCoupon);
router
    .route('/:id')
    .get(coupon_controller_1.couponMaker, coupon_controller_1.getCoupon)
    .patch(coupon_controller_1.couponMaker, coupon_controller_1.checkProductIspaid, coupon_controller_1.updateCoupon)
    .delete(coupon_controller_1.couponMaker, coupon_controller_1.checkProductIspaid, coupon_controller_1.removeCouponfromProduct, coupon_controller_1.deleteCoupon);
exports.default = router;
//# sourceMappingURL=coupon.routes.js.map