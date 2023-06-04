import catchAsync from '@utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from './handlerFactory';
import Notification from '@models/notification.model';
import { STATUS_CODE } from '../types/helper.types';

export const markAsRead = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let { chatId } = req.params;
    if (!chatId) chatId = req.body.chat;
    await Notification.updateMany(
      { chat: chatId, user: req.user?.id, read: false },
      { read: true }
    );
    res.sendStatus(STATUS_CODE.SUCCESS)
  }
);
export const getAllNotification = getAll(Notification);
export const createNotification = createOne(Notification);
export const getNotification = getOne(Notification);
export const updateNotification = updateOne(Notification);
export const deleteNotification = deleteOne(Notification);
