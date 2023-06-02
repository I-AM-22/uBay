import { Query, Schema, Types, model } from 'mongoose';
import { CommentDoc, CommentModel, IComment } from '../types/comment.types';

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

const Comment = model<CommentDoc, CommentModel>('Comment', commentSchema);
export default Comment;
