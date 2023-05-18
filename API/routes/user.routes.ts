import { Router } from 'express';
import passport from 'passport';
import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  getMe,
  updateMe,
  deleteMe,
} from '@controllers/user.controller';
import {
  login,
  signup,
  forgotPassword,
  resetPassword,
  updateMyPassword,
  restrictTo,
  isTokenValid,
} from '@controllers/auth.controller';
import { resizeUserImage, uploadUserPhoto } from '@middlewares/uploadingImage';
import { checkQuerySearch } from '@middlewares/helper.middleware';
import notificationRouter from '@routes/notification.routes';
import productRouter from '@routes/product.routes';
import validate from '@middlewares/validateResource';
import { userSchema, loginInput } from './../schema/user.schema';

const router = Router();

router.use('/:userId/notifications', notificationRouter);
router.use('/:userId/products', productRouter);

router.route('/signup').post(validate(userSchema), signup);
router.route('/login').post(validate(loginInput), login);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').get(isTokenValid).patch(resetPassword);

//Protect all routes after this middleware
router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router.route('/').get(checkQuerySearch, getAllUsers);
router
  .route('/me')
  .get(getMe, getUser)
  .patch(uploadUserPhoto, resizeUserImage, updateMe)
  .delete(deleteMe);
router.route('/updateMyPassword').patch(updateMyPassword);

//All routes after this middleware are only for admin
router.use(restrictTo('admin'));
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

export default router;
