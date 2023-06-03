import express from 'express';

import { restrictTo } from '@middlewares/auth.middleware';
import {
  getCoupon,
  getCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  checkIsOwnerProdCoup,
} from '@controllers/coupon.controller';
import passport from 'passport';
import validate from '@middlewares/validateResource';
import { couponSchema } from './../schema/coupon.schema';
import { setIds } from '@middlewares/helper.middleware';

const router = express.Router();

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('user')
);

router
  .route('/')
  .get(getCoupons)
  .post(setIds(), validate(couponSchema), checkIsOwnerProdCoup, createCoupon);
router.route('/:id').get(getCoupon).patch(updateCoupon).delete(deleteCoupon);

export default router;
