import { Request, Response, NextFunction } from 'express';
import catchAsync from '@utils/catchAsync';
import Chat from '@models/chat.model';
import AppError from '@utils/appError';
import { IChat } from '../types/chat.type';

import {
  createOne,
  getOne,
  deleteOne,
  updateOne,
} from '@controllers/handlerFactory';

export const accessChat = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    if (!userId)
      return next(new AppError(400, 'please send user id with request'));
    const isChat = await Chat.findOne({
      isGroup: false,
      $and: [
        { users: { $elemMatch: { $eq: userId } } },
        { users: { $elemMatch: { $eq: req.user?._id } } },
      ],
    });
    if (isChat) {
      return res.status(200).json({ data: isChat });
    }
    const chatData: any = {
      isGroup: false,
      users: [req.user?.id, userId],
      name: 'Sender',
    };
    const createdChat = await Chat.create(chatData);
    res.status(201).json({ status: 'success', data: createdChat });
  }
);

export const getAllChats = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const chats = await Chat.find({
      users: { $elemMatch: { $eq: req.user?._id } },
    }).sort({ updatedAt: -1 });
    res
      .status(200)
      .json({ status: 'success', result: chats.length, data: chats });
  }
);


export const getChat = getOne(Chat);
export const CreateChat = createOne(Chat);
export const updateChat = updateOne(Chat);
export const deleteChat = deleteOne(Chat);
