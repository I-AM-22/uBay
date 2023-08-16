import express from 'express';

import { restrictTo } from '@middlewares/auth.middleware';
import {
  getCoupon,
  getCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getMyCoupons,
  couponMaker,
  checkProductIspaid,
  removeCouponfromProduct,
} from '@controllers/coupon.controller';
import passport from 'passport';
import validate from '@middlewares/validateResource';
import { couponSchema } from './../schema/coupon.schema';
import { checkIsOwnerProduct } from '@controllers/product.controller';
import { getProductCoupons } from '../controllers/coupon.controller';

const router = express.Router({ mergeParams: true });

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('user')
);
router.get('/myCoupons', getMyCoupons, getCoupons);

router
  .route('/')
  .get(getProductCoupons, checkIsOwnerProduct, getCoupons)
  .post(
    validate(couponSchema),
    getProductCoupons,
    checkIsOwnerProduct,
    createCoupon
  );
router
  .route('/:id')
  .get(couponMaker, getCoupon)
  .patch(couponMaker,checkProductIspaid, updateCoupon)
  .delete(couponMaker
          ,checkProductIspaid
          ,removeCouponfromProduct
          , deleteCoupon);
export default router;
