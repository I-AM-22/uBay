import { Request, Response, NextFunction } from 'express';
import {
  createOne,
  getAll,
  getOne,
  deleteOne,
  updateOne,
} from './handlerFactory';
import User from '@models/User';
import catchAsync from '@utils/catchAsync';

export const getAllUSers = getAll(User);
export const getUser = getOne(User);
export const CreateUser = createOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
