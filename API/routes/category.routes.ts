import { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from '@controllers/category.controller';
import { restrictTo } from '@controllers/auth.controller';
import passport from 'passport';
import { getAllCategories } from '@controllers/category.controller';
import productRouter from '@routes/product.routes';

const router = Router();

router.use('/:categoryId/products', productRouter);

router
  .route('/')
  .get(getAllCategories)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
    createCategory
  );

router
  .route('/:id')
  .get(getCategory)
  .patch(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
    updateCategory
  )
  .delete(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('admin'),
    deleteCategory
  );

export default router;
