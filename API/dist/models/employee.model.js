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
const employeeSchema = new mongoose_1.Schema({
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
    photo: {
        type: String,
        default: 'https://i.imgur.com/7rlze8l.jpg',
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    store: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Store',
    },
    address: {
        type: String,
        required: true,
    },
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
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
});
employeeSchema.virtual('role').get(function () {
    return 'employee';
});
employeeSchema.index({ name: 1, email: 1 });
employeeSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return next();
        this.password = yield bcryptjs_1.default.hash(this.password, 12);
        next();
    });
});
employeeSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew)
        return next();
    this.passwordResetToken = undefined;
    this.passwordResetExpires = undefined;
    this.passwordChangedAt = new Date(Date.now() - 1000);
    next();
});
employeeSchema.methods.correctPassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcryptjs_1.default.compare(candidatePassword, this.password);
    });
};
employeeSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'store',
        select: 'name address',
    });
    next();
});
employeeSchema.pre(/^find/, function (next) {
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
employeeSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.getUpdate().password)
            return next();
        this.getUpdate().password = yield bcryptjs_1.default.hash(this.getUpdate().password, 12);
        next();
    });
});
employeeSchema.methods.isPasswordChanged = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changeTimestamp = this.passwordChangedAt.getTime() / 1000;
        return changeTimestamp > JWTTimestamp;
    }
    return false;
};
const Employee = (0, mongoose_1.model)('Employee', employeeSchema);
exports.default = Employee;
//# sourceMappingURL=employee.model.js.map