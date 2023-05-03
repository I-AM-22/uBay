import { Schema, Types, model } from 'mongoose';
import { CommentDoc, CommentModel } from '../types/comment.type';

const commentSchema = new Schema<CommentDoc, CommentModel, any>({
  content: { type: String, required: [true, 'Comment must have content'] },
  user: { type: Types.ObjectId, required: [true, 'Comment must have user'] },
  product: { type: Types.ObjectId, required: [true, 'Comment must have post'] },
});

const Comment = model<CommentDoc>('Comment', commentSchema);
