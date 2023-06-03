import { Router } from 'express';
import {
  checkIsOwnerComment,
  createComment,
  deleteComment,
  getAllComments,
  getComment,
  updateComment,
} from '@controllers/comment.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import passport from 'passport';
import validate from '@middlewares/validateResource';
import { commentSchema } from './../schema/comment.schema';
import { setIds } from '@middlewares/helper.middleware';

const router = Router({ mergeParams: true });

router.use(
  passport.authenticate('jwt', { session: false, failWithError: true })
);

router
  .route('/')
  .get(getAllComments)
  .post(
    restrictTo('user'),
    setIds('productId'),
    validate(commentSchema),
    createComment
  );

router
  .route('/:id')
  .get(getComment)
  .patch(checkIsOwnerComment, updateComment)
  .delete(checkIsOwnerComment, deleteComment);
export default router;
