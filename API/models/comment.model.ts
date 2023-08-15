import { Query, Schema, Types, model } from 'mongoose';
import { CommentDoc, CommentModel, IComment } from '../types/comment.types';
import Product from './product.model';

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
    select: {
      name: 1,
      photo: 1,
      wallet: 0,
      favoriteCategories: 0,
      favoriteCities: 0,
    },
  });
});

commentSchema.pre<Query<IComment, IComment>>(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: {
      name: 1,
      photo: 1,
      wallet: 0,
      favoriteCategories: 0,
      favoriteCities: 0,
    },
  });
  next();
});

commentSchema.statics.calcAverageRatings = async function (productId) {
  const stats = await this.aggregate([
    { $match: { product: productId } },
    {
      $group: {
        _id: '$product',
        numRatings: { $sum: 1 },
      },
    },
  ]);
  if (stats.length > 0) {
    const body = {
      comments: stats[0].numRatings,
    };
    await Product.findByIdAndUpdate(productId, body);
  } else {
    const body = {
      comments: 0,
    };
    await Product.findByIdAndUpdate(productId, body);
  }
};

commentSchema.post<any>('save', function () {
  //update the ratingsAvg on tour each time a review created
  this.constructor.calcAverageRatings(this.product);
});

commentSchema.pre<any>('findOneAndRemove', async function (next) {
  // I can not use this.findOne() here because it returns null when i delete doc but it works on update
  const docToUpdate = await this.model.findOne(this.getQuery());
  this.doc = docToUpdate;
  next();
});
commentSchema.post<any>('findOneAndRemove', async function () {
  // I can not use this.findOne() here because it returns null when i delete doc but it works on update
  this.model.calcAverageRatings(this.doc.product);
});

const Comment = model<CommentDoc, CommentModel>('Comment', commentSchema);
export default Comment;
