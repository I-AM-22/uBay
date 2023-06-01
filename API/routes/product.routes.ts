import { Router } from 'express';
import { restrictTo } from '@controllers/auth.controller';
import commentRouter from '@routes/comment.routes';
import passport from 'passport';
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
import { productSchema } from './../schema/product.schema';
import { setUserId } from '@middlewares/helper.middleware';

const router = Router({ mergeParams: true });
/*
NOTE  when we use middleware route we send with him the direct path and inside
NOTE  the route we don't need to  write the url another time cause in father
NOTE  app we use the route and send the url with and inside the route we deal with him like a father
*/
router.use('/:productId/comments/', commentRouter);

router
  .route('/')
  .get(getAllProducts)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('user'),
    uploadProductPhotos,
    resizeProductPhotos,
    setUserId,
    validate(productSchema),
    createProduct
  );

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router.post('/:id/likes', restrictTo('user'), like);
router.delete('/:id/likes', restrictTo('user'), dislike);

router
  .route('/:id')
  .get(getProduct)
  .patch(
    checkIsOwnerProduct,
    uploadProductPhotos,
    resizeProductPhotos,
    updateProduct
  )
  .delete(checkIsOwnerProduct, deleteProduct);

export default router;
