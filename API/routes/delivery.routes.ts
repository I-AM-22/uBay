import {
  getAllDeliveries,
  getDelivery,
  generateQrForSeller,
  generateQrForCustomer,
  receive,
} from '@controllers/delivery.controller';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';

import { Router } from 'express';
import validate from '@middlewares/validateResource';
import { deliverySchema } from '../schema/delivery.schema';
import { QrSchema } from '../schema/delivery.schema';
import { deleteOne } from '@controllers/handlerFactory';
import Delivery from '../models/delivery.model';
const router = Router();

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router
  .route('/')
  .get(restrictTo('employee', 'admin', 'superadmin'), getAllDeliveries);
router.route('/:id').get(restrictTo('employee'), getDelivery);

router.post(
  '/generateQrForSeller',
  restrictTo('user'),
  validate(QrSchema),
  generateQrForSeller
);

router.post(
  '/generateQrForCustomer',
  restrictTo('user'),
  validate(QrSchema),
  generateQrForCustomer
);

router.post(
  '/receive',
  restrictTo('employee'),
  validate(deliverySchema),
  receive
);

export default router;
