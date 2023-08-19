import { Router } from 'express';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';
import commentRouter from '@routes/comment.routes';
import {
  checkIsOwnerProduct,
  checkProductIsPaid,
  createProduct,
  deleteProduct,
  dislike,
  filterCoupon,
  getAllProducts,
  getAllPros,
  getProduct,
  like,
  myProduct,
  updateProduct,
} from '@controllers/product.controller';
import {
  resizeProductPhotos,
  uploadProductPhotos,
} from '@middlewares/uploadingImage';
import validate from '@middlewares/validateResource';
import { productSchema } from '../schema/product.schema';
import { setIds } from '@middlewares/helper.middleware';
import couponRouter from '@routes/coupon.routes';

const router = Router({ mergeParams: true });

// Public routes
router.use('/:productId/comments/', commentRouter);

router.use('/:productId/coupons/', couponRouter);

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

// Routes requiring authentication

router.get('/', getAllPros);
router.get('/mine', myProduct);
router.get('/:id', getProduct, filterCoupon);

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
  checkProductIsPaid,
  updateProduct
);

router.delete('/:id', checkIsOwnerProduct, deleteProduct);
export default router;
