import { createPayment, deletePayment, getAllPayment, getPayment, hasCoupon } from '@controllers/payment.controller';
import express from 'express';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';
import validate from '@middlewares/validateResource';
import { paymentSchema } from '../schema/payment.schema';
const router = express.Router();
router.route('/')
    .get(
        passport.authenticate('jwt', { failWithError: true, session: false }),
        restrictTo('superadmin', 'admin', 'employee'),
        getAllPayment
    )
    .post(
        passport.authenticate('jwt', { failWithError: true, session: false }),
        restrictTo('user'),
        validate(paymentSchema),
        hasCoupon,
        createPayment
    );
router.route('/:id')
    .get(
        passport.authenticate('jwt', { failWithError: true, session: false }),
        getPayment
    )
    .delete(
        passport.authenticate('jwt', { failWithError: true, session: false }),
        restrictTo('superadmin', 'admin',"employee"),
        deletePayment
    )
export default router;
