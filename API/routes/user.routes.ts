import { Router } from 'express';
import passport from 'passport';
import JWTStrategy from '@middlewares/passport.config';
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
import checkReqQuery from '@middlewares/checkSearch.middleware';
import notificationRouter from '@routes/notification.routes';

const router = Router();

router.use('/:userId/notifications', notificationRouter);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').get(isTokenValid).patch(resetPassword);

//Protect all routes after this middleware
router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router.route('/').get(checkReqQuery, getAllUsers);
router.route('/me').get(getMe, getUser);
router.route('/updateMyPassword').patch(updateMyPassword);
router.route('/updateMe').patch(uploadUserPhoto, resizeUserImage, updateMe);
router.route('/deleteMe').delete(deleteMe);

//All routes after this middleware are only for admin
router.use(restrictTo('admin'));

router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);
export default router;
