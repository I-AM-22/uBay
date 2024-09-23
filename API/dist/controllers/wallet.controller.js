"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWallets = exports.chargeMyWallet = void 0;
const wallet_model_1 = require("@models/wallet.model");
const appError_1 = require("@utils/appError");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("./../types/helper.types");
const handlerFactory_1 = require("./handlerFactory");
exports.chargeMyWallet = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, userId } = req.body;
    const wallet = yield wallet_model_1.default.findOneAndUpdate({ user: userId }, {
        $inc: { total: amount },
    }, { new: true });
    if (!wallet) {
        return next(new appError_1.default(404, [], 'Wallet not found'));
    }
    return res.status(helper_types_1.STATUS_CODE.SUCCESS).json(wallet);
}));
exports.getAllWallets = (0, handlerFactory_1.getAll)(wallet_model_1.default);
//# sourceMappingURL=wallet.controller.js.map