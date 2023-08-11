import { storeSchema } from './../schema/store.schema';
import { Router } from 'express';
import {
  createStore,
  deleteStore,
  getStore,
  updateStore,
  getAllStores,
  getAllproductInstore
} from '@controllers/store.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import passport from 'passport';
import userRouter from '@routes/user.routes';
import validate from '@middlewares/validateResource';

const router = Router();
router.use(passport.authenticate('jwt', { session: false, failWithError: true }));

router.get("/:storeID/getAllproduct",
  restrictTo('employee', 'admin', 'superadmin'),
  getAllproductInstore
);
router
  .route('/')
  .get(getAllStores)
  .post(
    restrictTo('superadmin', 'admin'),
    validate(storeSchema),
    createStore
  );

router
  .route('/:id')
  .get(getStore)
  .patch(
    restrictTo('superadmin', 'admin'),
    updateStore
  )
  .delete(
    restrictTo('superadmin', 'admin'),
    deleteStore
  );

export default router;
