import Message from '@models/message.model';
import {
  createOne,
  getAll,
  getOne,
  deleteOne,
  updateOne,
} from '@controllers/handlerFactory';
import { checkIsOwner } from '@middlewares/auth.middleware';
import { Request, Response, NextFunction } from 'express';

export const checkIsOwnerMessage = checkIsOwner(Message);

export const getAllMessages = getAll(Message);
export const getMessage = getOne(Message);
export const CreateMessage = createOne(Message);
export const updateMessage = updateOne(Message);
export const deleteMessage = deleteOne(Message);
