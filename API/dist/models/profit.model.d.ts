import { IProfit, ProfitDoc } from 'types/profit';
declare const Profit: import("mongoose").Model<ProfitDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, ProfitDoc> & Omit<IProfit & import("mongoose").Document<any, any, any> & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>;
export default Profit;
