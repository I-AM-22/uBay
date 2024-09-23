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
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = require("crypto");
const appError_1 = require("@utils/appError");
const helper_types_1 = require("../types/helper.types");
const wallet_model_1 = require("./wallet.model");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    photo: { type: String, default: 'https://i.imgur.com/7rlze8l.jpg' },
    role: {
        type: String,
        enum: ['admin', 'user', 'superadmin'],
        default: 'user',
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
    includeInActive: {
        type: Boolean,
        default: true,
        select: false,
    },
    wallet: { type: mongoose_1.Types.ObjectId, ref: 'Wallet', unique: true },
    favoriteCategories: {
        type: [mongoose_1.Types.ObjectId],
        ref: 'Category',
        default: [],
    },
    favoriteCities: { type: [mongoose_1.Types.ObjectId], ref: 'City', default: [] },
}, {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
});
userSchema.index({ name: 1, email: 1 });
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return next();
        this.password = yield bcryptjs_1.default.hash(this.password, 12);
        next();
    });
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.role === 'user')
            return next();
        this.favoriteCategories = undefined;
        this.favoriteCities = undefined;
        next();
    });
});
userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew)
        return next();
    this.passwordResetToken = undefined;
    this.passwordResetExpires = undefined;
    this.passwordChangedAt = new Date(Date.now() - 1000);
    next();
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isNew || this.role !== 'user')
            return next();
        const wallet = yield wallet_model_1.default.create({ user: this.id });
        this.wallet = wallet.id;
        next();
    });
});
userSchema.pre(/^find/, function (next) {
    this.populate('wallet')
        .populate({
        path: 'favoriteCategories',
        select: { name: 1, description: 1 },
    })
        .populate({ path: 'favoriteCities', select: { name: 1 } });
    next();
});
userSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.populate('wallet');
        yield this.populate({ path: 'favoriteCategories' });
        yield this.populate({ path: 'favoriteCities' });
    });
});
userSchema.pre(/^find/, function (next) {
    const query = {};
    if (this.getQuery().includeInActive !== undefined) {
        this.find({});
    }
    else {
        query.active = { $ne: false };
        this.find(query);
    }
    next();
});
userSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.getUpdate().password)
            return next();
        const user = yield this.model.findById(this.getQuery()._id);
        if (user.role === 'user')
            return next(new appError_1.default(helper_types_1.STATUS_CODE.FORBIDDEN, [], 'غير مسموح بتعديل كلمة مرور مستخدم'));
        this.getUpdate().password = yield bcryptjs_1.default.hash(this.getUpdate().password, 12);
        next();
    });
});
userSchema.methods.correctPassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcryptjs_1.default.compare(candidatePassword, this.password);
    });
};
userSchema.methods.isPasswordChanged = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changeTimestamp = this.passwordChangedAt.getTime() / 1000;
        return changeTimestamp > JWTTimestamp;
    }
    return false;
};
userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto_1.default.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto_1.default
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);
    return resetToken;
};
userSchema.statics.filter = function (path, user) {
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === 'admin' || (user === null || user === void 0 ? void 0 : user.role) === 'superadmin';
    const isPathUser = path === 'user';
    const isPathAdmin = path === 'admin';
    const filter = { _id: { $ne: user === null || user === void 0 ? void 0 : user.id } };
    let select = '';
    if (isAdmin) {
        filter.includeInActive = { $ne: false };
        select = '+active';
    }
    if (isPathUser) {
        filter.role = 'user';
    }
    else if (isPathAdmin) {
        filter.role = 'admin';
    }
    return { filter, select };
};
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map