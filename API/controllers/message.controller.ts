import Message from '@models/message.model';
import {
  createOne,
  getAll,
  getOne,
  deleteOne,
  updateOne,
} from '@controllers/handlerFactory';
import { checkIsOwner } from '@middlewares/helper.middleware';
import { Request, Response, NextFunction } from 'express';

export const setSenderAndChat = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.chat) req.body.chat = req.params.chatId;
  req.body.user = req.user?.id;
  next();
};

export const checkIsOwnerMessage = checkIsOwner(Message);

export const getAllMessages = getAll(Message);
export const getMessage = getOne(Message);
export const CreateMessage = createOne(Message);
export const updateMessage = updateOne(Message);
export const deleteMessage = deleteOne(Message);
