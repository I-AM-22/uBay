import { Types } from 'mongoose';
import { CityDoc } from '../types/city.types';
declare const City: import("mongoose").Model<CityDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, CityDoc> & Omit<import("../types/city.types").ICity & import("mongoose").Document<any, any, any> & {
    _id: Types.ObjectId;
}, never>, any>;
export default City;
