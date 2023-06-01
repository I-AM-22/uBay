import { Model } from 'mongoose';
import AppError from './appError';
import { STATUS_CODE } from '../types/helper.types';

export const isOwner = async function (
  Model: Model<any>,
  id: string,
  user: Express.User
) {
  const item = await Model.findOne({ _id: id, user });

  if (!item && user.role !== 'admin') {
    throw new AppError(
      STATUS_CODE.FORBIDDEN,
      [],
      'You are not authorized to perform this action'
    );
  }
  return item;
};
