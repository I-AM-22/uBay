import { PopulatedDoc, Query, Schema, Types, model } from 'mongoose';
import { MessageModel, MessageDoc, IMessage } from '../types/message.type';
import Chat from './chat.model';
import { IUser } from '../types/user.type';
import Notification from './notification.model';
import AppError from '@utils/appError';
import { IChat } from '../types/chat.type';

const messageSchema = new Schema<MessageDoc, MessageModel, any>(
  {
    content: { type: String, required: [true, 'message must have a content'] },
    sender: {
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
    users: { $elemMatch: { $eq: this.sender } },
  });
  if (!chat) return next(new AppError(400, 'you do not belong to this chat'));
  next();
});

messageSchema.post('save', async function (doc, next) {
  await Chat.findByIdAndUpdate(this.chat, { lastMessage: doc });
  await doc.populate({
    path: 'sender',
    select: 'name photo email',
  });
  await doc.populate({ path: 'chat', select: { lastMessage: 0 } });
  next();
});

messageSchema.post('save', async function (doc) {
  if (!doc.chat) return;
  const users: Array<PopulatedDoc<IUser> | Types.ObjectId> = doc.chat.users;

  users.forEach(async (user: any) => {
    if (!doc.sender) return;
    if (user.id === doc.sender.id) return;
    await Notification.create({
      message: doc.id,
      chat: doc.chat.id,
      user: user.id,
    });
  });
});

messageSchema.pre<Query<IMessage, IMessage>>(/^find/, function (next) {
  this.populate({ path: 'sender', select: 'name photo email' });
  this.populate({ path: 'chat', select: { lastMessage: 0 } });
  next();
});
const Message = model<MessageDoc>('Message', messageSchema);
export default Message;