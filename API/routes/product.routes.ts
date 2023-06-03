import { Router } from 'express';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';
import commentRouter from '@routes/comment.routes';
import {
  checkIsOwnerProduct,
  createProduct,
  deleteProduct,
  dislike,
  getAllProducts,
  getProduct,
  like,
  updateProduct,
} from '@controllers/product.controller';
import {
  resizeProductPhotos,
  uploadProductPhotos,
} from '@middlewares/uploadingImage';
import validate from '@middlewares/validateResource';
import { productSchema } from '../schema/product.schema';
import { setIds } from '@middlewares/helper.middleware';

const router = Router({ mergeParams: true });

// Public routes
router.use('/:productId/comments/', commentRouter);
router.get('/', getAllProducts);
router.get('/:id', getProduct); // Excluded from authentication

// Routes requiring authentication
router.use(passport.authenticate('jwt', { session: false, failWithError: true }));
router.post(
  '/',
  restrictTo('user'),
  uploadProductPhotos,
  resizeProductPhotos,
  setIds(),
  validate(productSchema),
  createProduct
);
router.post('/:id/likes', restrictTo('user'), like);
router.delete('/:id/likes', restrictTo('user'), dislike);
router.patch(
  '/:id',
  checkIsOwnerProduct,
  uploadProductPhotos,
  resizeProductPhotos,
  updateProduct
);
router.delete('/:id', checkIsOwnerProduct, deleteProduct);

export default router;
