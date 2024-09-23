import { Types } from 'mongoose';
import { UserDoc } from '../types/user.types';
declare const User: import("mongoose").Model<UserDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, UserDoc> & Omit<UserDoc & {
    _id: Types.ObjectId;
}, never>, any>;
export default User;
