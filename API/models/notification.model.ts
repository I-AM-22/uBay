import { Query, Schema, model } from 'mongoose';
import {
  INotification,
  NotificationDoc,
  NotificationModel,
} from '../types/notification.types';

const notificationSchema = new Schema<NotificationDoc, NotificationModel, any>(
  {
    message: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
      required: [true, 'Notification must have message'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Notification must have user'],
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      required: [true, 'Notification must have chat'],
    },
    read: { type: Boolean, default: false },
  },
  {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
  }
);

notificationSchema.pre<Query<INotification, INotification>>(
  /^find/,
  function (next) {
    this.populate({
      path: 'user',
      select: {
        name: 1,
        photo: 1,
        wallet: 0,
        favoriteCategories: 0,
        favoriteCities: 0,
      },
    }).populate('message');
    next();
  }
);

const Notification = model<NotificationDoc>('Notification', notificationSchema);
export default Notification;
