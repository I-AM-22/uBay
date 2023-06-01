import express from 'express';

import { restrictTo } from '@controllers/auth.controller';
import {
  getCoupon,
  getCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  isProductOwner,
} from '@controllers/coupon.controller';
import passport from 'passport';
import validate from '@middlewares/validateResource';
import { couponSchema } from './../schema/coupon.schema';
import { setUserId } from '@middlewares/helper.middleware';

const router = express.Router();

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('user')
);

router
  .route('/')
  .get(getCoupons)
  .post(setUserId, validate(couponSchema), isProductOwner, createCoupon);
router.route('/:id').get(getCoupon).patch(updateCoupon).delete(deleteCoupon);

export default router;
