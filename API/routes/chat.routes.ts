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
import { restrictTo } from '@middlewares/auth.middleware';

const router = Router();

router.use('/:chatId/messages', messageRouter);
router.use('/:chatId/notifications', notificationRouter);

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('user','superadmin')
);

router
  .route('/')
  .get(getAllChats)
  .post(validate(chatSchema), isSeller, accessChat);

router.route('/:id').get(getChat).patch(updateChat).delete(deleteChat);

export default router;
