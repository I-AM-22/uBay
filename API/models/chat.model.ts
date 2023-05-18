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
    select: 'name photo email',
  });
  await this.populate({ path: 'seller', select: 'name photo email' });
  await this.populate({
    path: 'product',
    select: 'description price category',
  });
});

chatSchema.pre<Query<IChat, IChat>>(/^find/, function (next) {
  this.populate('customer', 'name photo email')
    .populate({ path: 'seller', select: 'name photo email' })
    .populate({
      path: 'product',
      select: { description: 1, price: 1, category: 1, user: 1 },
    })
    .populate({
      path: 'lastMessage',
      select: { chat: 0 },
    });
  next();
});

const Chat = model<ChatDoc>('Chat', chatSchema);
export default Chat;
