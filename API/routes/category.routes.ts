import { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from '@controllers/category.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import passport from 'passport';
import { getAllCategories } from '@controllers/category.controller';
import productRouter from '@routes/product.routes';
import validate from '@middlewares/validateResource';
import { categorySchema } from './../schema/category.schema';

const router = Router();

router.use('/:categoryId/products', productRouter);

router
  .route('/')
  .get(getAllCategories)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    validate(categorySchema),
    createCategory
  );

router
  .route('/:id')
  .get(getCategory)
  .patch(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    updateCategory
  )
  .delete(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    deleteCategory
  );

export default router;
