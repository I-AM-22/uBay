import { Router } from 'express';
import userRouter from '@routes/user.routes';
import AppError from '@utils/appError';
import chatRouter from '@routes/chat.routes';
import messageRouter from '@routes/message.routes';
import notificationRouter from '@routes/notification.routes';

const router = Router();

router.use('/api/v1/users', userRouter);
router.use('/api/v1/chats', chatRouter);
router.use('/api/v1/messages', messageRouter);
router.use('/api/v1/notifications', notificationRouter);

export default router;
