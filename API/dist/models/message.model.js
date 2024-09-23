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
const mongoose_1 = require("mongoose");
const chat_model_1 = require("./chat.model");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const messageSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    user: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    chat: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Chat',
        required: true,
    },
}, {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
});
messageSchema.index({ content: 1 });
messageSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const chat = yield chat_model_1.default.findOne({
            _id: this.chat,
            $or: [{ seller: this.user }, { customer: this.user }],
        });
        if (!chat)
            return next(new appError_1.default(helper_types_1.STATUS_CODE.FORBIDDEN, [], 'you do not belong to this chat'));
        next();
    });
});
messageSchema.post('save', function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield chat_model_1.default.findByIdAndUpdate(this.chat, { lastMessage: doc });
        next();
    });
});
const Message = (0, mongoose_1.model)('Message', messageSchema);
exports.default = Message;
//# sourceMappingURL=message.model.js.map