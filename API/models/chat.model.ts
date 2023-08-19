import { Query, Schema, Types, model } from 'mongoose';
import { ChatModel, ChatDoc, IChat } from '../types/chat.types';

const chatSchema = new Schema<ChatDoc, ChatModel, any>(
  {
    name: {
      type: String,
      default: 'sender',
    },
    customer: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    seller: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    lastMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
  },

  {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
  }
);

chatSchema.post('save', async function () {
  await this.populate({
    path: 'customer',
    select: {
      name: 1,
      photo: 1,
      wallet: 0,
      favoriteCategories: 0,
      favoriteCities: 0,
    },
  });
  await this.populate({
    path: 'seller',
    select: {
      name: 1,
      photo: 1,
      wallet: 0,
      favoriteCategories: 0,
      favoriteCities: 0,
    },
  });
  await this.populate({
    path: 'product',
    select: {
      user: 0,
      title: 1,
      photos: 1,
      category: 1,
      price: 1,
      likedBy: 0,
      coupons: 0,
    },
  });
});

chatSchema.pre<Query<IChat, IChat>>(/^find/, function (next) {
  this.populate('customer', {
    name: 1,
    photo: 1,
    wallet: 0,
    favoriteCategories: 0,
    favoriteCities: 0,
  })
    .populate({
      path: 'seller',
      select: {
        name: 1,
        photo: 1,
        wallet: 0,
        favoriteCategories: 0,
        favoriteCities: 0,
      },
    })
    .populate({
      path: 'product',
      select: {
        user: 0,
        title: 1,
        photos: 1,
        category: 1,
        price: 1,
        likedBy: 0,
        coupons: 0,
      },
    });

  next();
});

const Chat = model<ChatDoc>('Chat', chatSchema);
export default Chat;
