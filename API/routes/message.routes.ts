import { Router } from 'express';
import passport from 'passport';
import {
  CreateMessage,
  getMessage,
  getAllMessages,
  updateMessage,
  deleteMessage,
  setSenderAndChat,
  checkIsOwnerMessage,
} from '@controllers/message.controller';
import validate from '@middlewares/validateResource';
import { messageSchema } from './../schema/message.schema';
import { restrictTo } from '@controllers/auth.controller';

const router = Router({ mergeParams: true });

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('user', 'admin')
);
router
  .route('/')
  .get(getAllMessages)
  .post(setSenderAndChat, validate(messageSchema), CreateMessage);
router
  .route('/:id')
  .get(getMessage)
  .patch(checkIsOwnerMessage, updateMessage)
  .delete(checkIsOwnerMessage, deleteMessage);

export default router;
