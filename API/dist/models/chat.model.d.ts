import { Types } from 'mongoose';
import { ChatDoc } from '../types/chat.types';
declare const Chat: import("mongoose").Model<ChatDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, ChatDoc> & Omit<ChatDoc & {
    _id: Types.ObjectId;
}, never>, any>;
export default Chat;
