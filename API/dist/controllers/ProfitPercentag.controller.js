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
exports.createOrUpdatePercentage = exports.getProfitPercentage = exports.getAllProfit = void 0;
const ProfitPercentag_model_1 = require("@models/ProfitPercentag.model");
const handlerFactory_1 = require("@controllers/handlerFactory");
const catchAsync_1 = require("@utils/catchAsync");
const helper_types_1 = require("../types/helper.types");
const profit_model_1 = require("@models/profit.model");
exports.getAllProfit = (0, handlerFactory_1.getAll)(profit_model_1.default);
exports.getProfitPercentage = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const percentageDoc = yield ProfitPercentag_model_1.default.findOne({});
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(percentageDoc);
}));
exports.createOrUpdatePercentage = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const percentageDoc = yield ProfitPercentag_model_1.default.findOneAndUpdate({}, { value: req.body.value }, {
        new: true,
        upsert: true,
        runValidators: true,
    });
    res.status(helper_types_1.STATUS_CODE.SUCCESS).json(percentageDoc);
}));
//# sourceMappingURL=ProfitPercentag.controller.js.map