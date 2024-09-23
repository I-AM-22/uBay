import { Types } from 'mongoose';
import { WalletDoc } from 'types/wallet.types';
declare const Wallet: import("mongoose").Model<WalletDoc, {}, {}, {}, import("mongoose").Document<unknown, {}, WalletDoc> & Omit<WalletDoc & {
    _id: Types.ObjectId;
}, never>, any>;
export default Wallet;
