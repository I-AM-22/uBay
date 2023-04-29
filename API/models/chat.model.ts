import { Query, Schema, model } from 'mongoose';
import { ChatModel, ChatDoc, IChat } from '../types/chat.type';
import AppError from '@utils/appError';
import Notification from '@models/notification.model';

const chatSchema = new Schema<ChatDoc, ChatModel, any>(
  {
    name: {
      type: String,
      required: [true, 'Chat must have a name'],
      minlength: 1,
      maxlength: 16,
    },
    users: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      required: [true, 'Chat must have users'],
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
  await this.populate({ path: 'users', select: 'name photo email' });
});

chatSchema.pre<Query<IChat, IChat>>(/^find/, function (next) {
  this.populate('users', 'name photo email')
    .populate({ path: 'lastMessage', select: { chat: 0 } });
  next();
});


const Chat = model<ChatDoc>('Chat', chatSchema);
export default Chat;
