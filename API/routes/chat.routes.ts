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
  isSeller,
} from '@controllers/chat.controller';
import validate from '@middlewares/validateResource';
import { chatSchema } from './../schema/chat.schema';
import { restrictTo } from '@controllers/auth.controller';

const router = Router();

router.use('/:chatId/messages', messageRouter);
router.use('/:chatId/notifications', notificationRouter);

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router
  .route('/')
  .get(getAllChats)
  .post(restrictTo('user'), validate(chatSchema), isSeller, accessChat);

router
  .route('/:id')
  .get(getChat)
  .patch(restrictTo('user', 'admin'), updateChat)
  .delete(restrictTo('user', 'admin'), deleteChat);

export default router;
