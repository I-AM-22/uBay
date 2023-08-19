import { Query, Schema, Types, model } from 'mongoose';
import { MessageModel, MessageDoc, IMessage } from '../types/message.types';
import Chat from './chat.model';
import Notification from './notification.model';
import AppError from '@utils/appError';
import { STATUS_CODE } from '../types/helper.types';

const messageSchema = new Schema<MessageDoc, MessageModel, any>(
  {
    content: { type: String, required: true },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    chat: {
      type: Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
  }
);
messageSchema.index({ content: 1 });
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

  next();
});

// messageSchema.post('save', async function (doc) {
//   if (!doc.chat) return;
//   if (!doc.user) return;
//   if (doc.user.id === doc.chat.customer?.id) {
//     await Notification.create({
//       message: doc.id,
//       chat: doc.chat.id,
//       user: doc.chat.seller?.id,
//     });
//   } else {
//     await Notification.create({
//       message: doc.id,
//       chat: doc.chat.id,
//       user: doc.chat.customer?.id,
//     });
//   }
// });

const Message = model<MessageDoc, MessageModel>('Message', messageSchema);
export default Message;
