import { INotification, NotificationDoc } from '../types/notification.types';
declare const Notification: import("mongoose").Model<NotificationDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, NotificationDoc> & Omit<INotification & import("mongoose").Document<any, any, any> & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>;
export default Notification;
