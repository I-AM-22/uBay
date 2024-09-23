import { Types } from 'mongoose';
import { ProfitPercentageDoc } from 'types/ProfitPercentage.types';
declare const ProfitPercentage: import("mongoose").Model<ProfitPercentageDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, ProfitPercentageDoc> & Omit<import("types/ProfitPercentage.types").IProfitPercentage & import("mongoose").Document<any, any, any> & {
    _id: Types.ObjectId;
}, never>, any>;
export default ProfitPercentage;
