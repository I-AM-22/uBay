import { Router } from 'express';
import passport from 'passport';
import {
  CreateMessage,
  getMessage,
  getAllMessages,
  updateMessage,
  deleteMessage,
  setSenderAndChat,
} from '@controllers/message.controller';

const router = Router({ mergeParams: true });

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);
router.route('/').get(getAllMessages).post(setSenderAndChat, CreateMessage);
router.route('/:id').get(getMessage).patch(updateMessage).delete(deleteMessage);

export default router;
