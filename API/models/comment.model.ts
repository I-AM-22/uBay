import { Query, Schema, Types, model } from 'mongoose';
import { CommentDoc, CommentModel, IComment } from '../types/comment.types';
import { CustomModel } from '../types/helper.types';
import { isOwner } from '@utils/logics';

const commentSchema = new Schema<CommentDoc, CommentModel, any>(
  {
    content: { type: String, required: true },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: Types.ObjectId,
      required: true,
      ref: 'Product',
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
  }
);

commentSchema.post('save', async function () {
  await this.populate({
    path: 'user',
    select: 'name photo email',
  });
});

commentSchema.pre<Query<IComment, IComment>>(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo email',
  });
  next();
});
commentSchema.statics.findByIdAndCheckAuthorization = async function (
  id: string,
  user: Express.User
) {
  await isOwner(this, id, user);
};

const Comment = model<CommentDoc, CommentModel>(
  'Comment',
  commentSchema
) as CustomModel<CommentDoc>;
export default Comment;
