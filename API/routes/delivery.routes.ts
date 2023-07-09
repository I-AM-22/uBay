import {
    createDelivery,
    customer_receipt,
    deleteDelivery,
    getAllDeliveries,
    getDelivery
} from '@controllers/delivery.controller';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';

import { Router } from 'express';
import validate from '@middlewares/validateResource';
import { deliverySchema } from '../schema/delivery.schema';
const router = Router();

router.use(passport.authenticate('jwt', { session: false, failWithError: true }));

router
    .route('/')
    .get(
        restrictTo('employee', 'admin', 'superadmin'),
        getAllDeliveries
    ).post(
        restrictTo('employee'),
        validate(deliverySchema),
        createDelivery
    );
router
    .route('/:id')
    .get(
        restrictTo('employee'),
        getDelivery
    ).patch(
        restrictTo('employee'),
        customer_receipt
    ).delete(
        restrictTo('employee', 'admin', 'superadmin'),
        deleteDelivery
    )

export default router;