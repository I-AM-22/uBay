import { restrictTo } from '@middlewares/auth.middleware';
import {
  createNotification,
  deleteNotification,
  getAllNotification,
  getNotification,
  markAsRead,
  updateNotification,
} from '@controllers/notification.controller';
import { Router } from 'express';
import passport from 'passport';

const router = Router({ mergeParams: true });

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('user')
);

router.route('/').get(getAllNotification).post(createNotification);
router.patch('/read', markAsRead);
router
  .route('/:id')
  .get(getNotification)
  .delete(deleteNotification)
  .patch(updateNotification);

export default router;
