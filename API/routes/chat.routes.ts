import { Router } from 'express';
import passport from 'passport';
import messageRouter from '@routes/message.routes';
import notificationRouter from '@routes/notification.routes';
import {
  accessChat,
  getAllChats,
  getChat,
  updateChat,
  deleteChat,
} from '@controllers/chat.controller';

const router = Router();

router.use('/:chatId/messages', messageRouter);
router.use('/:chatId/notifications', notificationRouter);

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router.route('/').get(getAllChats).post(accessChat);

router.route('/:id').get(getChat).patch(updateChat).delete(deleteChat);

export default router;
