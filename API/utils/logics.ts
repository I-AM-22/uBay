import { Model } from 'mongoose';
import AppError from './appError';
import { STATUS_CODE } from '../types/helper.types';

export const isOwner = async function (
  Model: Model<any>,
  id: string,
  user: Express.User
) {
  const item = await Model.findById(id);
  if (!item) {
    throw new AppError(STATUS_CODE.NOT_FOUND, `${Model.modelName} not found`);
  }
  if (item.user.id.toString() !== user.id.toString() && user.role !== 'admin') {
    throw new AppError(
      STATUS_CODE.FORBIDDEN,
      'You are not authorized to perform this action'
    );
  }
  return item;
};
