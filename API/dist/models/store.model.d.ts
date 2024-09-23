import { Types } from 'mongoose';
import { StoreDoc, IStore } from '../types/store.types';
declare const Store: import("mongoose").Model<StoreDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, StoreDoc> & Omit<IStore & import("mongoose").Document<any, any, any> & {
    _id: Types.ObjectId;
}, never>, any>;
export default Store;
