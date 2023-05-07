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

const router = Router();

router.use('/:storeId/users', userRouter);

router
  .route('/')
  .get(getAllStores)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
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
