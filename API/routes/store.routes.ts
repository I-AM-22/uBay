import { storeSchema } from './../schema/store.schema';
import { Router } from 'express';
import {
  createStore,
  deleteStore,
  getStore,
  updateStore,
  getAllStores,
} from '@controllers/store.controller';
import { restrictTo } from '@controllers/auth.controller';
import passport from 'passport';
import userRouter from '@routes/user.routes';
import validate from '@middlewares/validateResource';

const router = Router();

router.use('/:storeId/users', userRouter);

router
  .route('/')
  .get(getAllStores)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
    validate(storeSchema),
    createStore
  );

router
  .route('/:id')
  .get(getStore)
  .patch(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
    updateStore
  )
  .delete(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
    deleteStore
  );

export default router;
