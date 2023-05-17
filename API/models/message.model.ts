import { Query, Schema, Types, model } from 'mongoose';
import { MessageModel, MessageDoc, IMessage } from '../types/message.types';
import Chat from './chat.model';
import Notification from './notification.model';
import AppError from '@utils/appError';
import { CustomModel, STATUS_CODE } from '../types/helper.types';
import { isOwner } from '@utils/logics';

const messageSchema = new Schema<MessageDoc, MessageModel, any>(
  {
    content: { type: String, required: [true, 'message must have a content'] },
    user: {
      type: Types.ObjectId,
      required: [true, 'message must have a sender'],
      ref: 'User',
    },
    chat: {
      type: Types.ObjectId,
      ref: 'Chat',
      required: [true, 'message must belong to a chat'],
    },
  },
  {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
  }
);
messageSchema.pre('save', async function (next) {
  const chat = await Chat.findOne({
    _id: this.chat,
    $or: [{ seller: this.user }, { customer: this.user }],
  });
  if (!chat)
    return next(
      new AppError(STATUS_CODE.FORBIDDEN, [], 'you do not belong to this chat')
    );
  next();
});

messageSchema.post('save', async function (doc, next) {
  await Chat.findByIdAndUpdate(this.chat, { lastMessage: doc });
  await doc.populate({
    path: 'user',
    select: 'name photo email',
  });
  await doc.populate({ path: 'chat', select: { lastMessage: 0 } });
  next();
});

messageSchema.post('save', async function (doc) {
  if (!doc.chat) return;
  if (!doc.user) return;
  if (doc.user.id === doc.chat.customer?.id) {
    await Notification.create({
      message: doc.id,
      chat: doc.chat.id,
      user: doc.chat.seller?.id,
    });
  } else {
    await Notification.create({
      message: doc.id,
      chat: doc.chat.id,
      user: doc.chat.customer?.id,
    });
  }
});

messageSchema.pre<Query<IMessage, IMessage>>(/^find/, function (next) {
  this.populate({ path: 'user', select: 'name photo email' });
  this.populate({ path: 'chat', select: { lastMessage: 0 } });
  next();
});

messageSchema.statics.findByIdAndCheckAuthorization = async function (
  id: string,
  user: Express.User
) {
  await isOwner(this, id, user);
};

const Message = model<MessageDoc, MessageModel>(
  'Message',
  messageSchema
) as CustomModel<MessageDoc>;
export default Message;
