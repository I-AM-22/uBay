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
  userToggleActive,
} from '@controllers/user.controller';
import {
  login,
  signup,
  forgotPassword,
  resetPassword,
  updateMyPassword,
  isTokenValid,
} from '@controllers/auth.controller';
import { resizeUserImage, uploadUserPhoto } from '@middlewares/uploadingImage';
import notificationRouter from '@routes/notification.routes';
import productRouter from '@routes/product.routes';
import validate from '@middlewares/validateResource';
import {
  userSchema,
  loginInput,
  forgotPasswordSchema,
  resetPasswordSchema,
  updatePasswordSchema,
} from './../schema/user.schema';
import { restrictTo } from '@middlewares/auth.middleware';

const router = Router();

router.use('/:userId/notifications', notificationRouter);
router.use('/:userId/products', productRouter);

router.route('/signup').post(validate(userSchema), signup);
router.route('/login').post(validate(loginInput), login('user'));
router
  .route('/forgotPassword')
  .post(validate(forgotPasswordSchema), forgotPassword);
router
  .route('/resetPassword')
  .get(validate(resetPasswordSchema), isTokenValid)
  .patch(validate(resetPasswordSchema), resetPassword);

//Protect all routes after this middleware
router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router.route('/').get(getAllUsers);
router
  .route('/me')
  .get(getMe, getUser)
  .patch(uploadUserPhoto, resizeUserImage, updateMe)
  .delete(deleteMe);
router
  .route('/updateMyPassword')
  .patch(validate(updatePasswordSchema), updateMyPassword);
router.route('/favorites').patch(updateMe);
//All routes after this middleware are only for admin
router.use(restrictTo('superadmin', 'admin'));
router.patch('/activeToggle', userToggleActive);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

export default router;
