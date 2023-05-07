import { Router } from 'express';
import {
  checkIsOwnerComment,
  createComment,
  deleteComment,
  getAllComments,
  getComment,
  setProductAndUserIds,
  updateComment,
} from '@controllers/comment.controller';
import { restrictTo } from '@controllers/auth.controller';
import passport from 'passport';

const router = Router({ mergeParams: true });

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router
  .route('/')
  .get(getAllComments)
  .post(restrictTo('user'), setProductAndUserIds, createComment);

router
  .route('/:id')
  .get(getComment)
  .patch(restrictTo('user', 'admin'), checkIsOwnerComment, updateComment)
  .delete(restrictTo('user', 'admin'), checkIsOwnerComment, deleteComment);
export default router;
