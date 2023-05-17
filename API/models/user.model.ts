import { Schema, model, Query, Types } from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { settings } from './../config/settings';
import { UserModel, UserDoc, IUser } from '../types/user.types';
import AppError from '@utils/appError';
import { STATUS_CODE } from '../types/helper.types';

const userSchema = new Schema<UserDoc, UserModel, any>(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: { type: String, default: 'https://i.imgur.com/7rlze8l.jpg' },
    role: {
      type: String,
      enum: ['admin', 'user', 'employee'],
      default: 'user',
    },
    store: { type: Types.ObjectId, ref: 'Store' },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'the password must have at least 8 characters'],
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
  },
  {
    toJSON: { virtuals: true, versionKey: false },
    toObject: { virtuals: true, versionKey: false },
    timestamps: true,
  }
);

//Document middleware

userSchema.pre('save', function (next) {
  if (this.role !== 'employee') next();
  if (!this.store)
    return next(
      new AppError(STATUS_CODE.BAD_REQUEST, [
        { name: 'store', message: 'Please provide a store for employee' },
      ])
    );
  next();
});

userSchema.pre('save', async function (next) {
  //if the password not changed end the process
  if (!this.isModified('password')) return next();
  //crypt the password
  this.password = await bcryptjs.hash(this.password, 12);
  next();
});

userSchema.pre('save', function (next) {
  //if the password not changed or newUser made end the process
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordResetToken = undefined;
  this.passwordResetExpires = undefined;
  this.passwordChangedAt = new Date(Date.now() - 1000);
  next();
});

userSchema.post('save', function () {
  this.populate('store');
});

userSchema.pre<Query<IUser, IUser>>(/^find/, function (next) {
  this.find({ active: { $ne: false } }).populate('store');
  next();
});

//we did this operation in the model to apply the concept of fat model && fit controller
//for matching the password with the encrypted one
userSchema.methods.correctPassword = async function (
  candidatePassword: string
) {
  //candidate password means the password with the body
  return bcryptjs.compare(candidatePassword, this.password);
};

//know if the password changed
userSchema.methods.isPasswordChanged = function (JWTTimestamp: number) {
  if (this.passwordChangedAt) {
    const changeTimestamp: number = this.passwordChangedAt.getTime() / 1000;
    return changeTimestamp > JWTTimestamp;
  }
  return false;
};
//Create reset Token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);
  return resetToken;
};

const User = model<UserDoc>('User', userSchema);

export default User;
