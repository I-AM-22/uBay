import { Router } from 'express';
import userRouter from '@routes/user.routes';
import productRouter from '@routes/product.routes';
import categoryRouter from '@routes/category.routes';
import commentRouter from '@routes/comment.routes';
import chatRouter from '@routes/chat.routes';
import messageRouter from '@routes/message.routes';
import notificationRouter from '@routes/notification.routes';
import storeRouter from '@routes/store.routes';

const router = Router();

router.use('/api/v1/users', userRouter);
router.use('/api/v1/products', productRouter);
router.use('/api/v1/comments', commentRouter);
router.use('/api/v1/categories', categoryRouter);
router.use('/api/v1/stores', storeRouter);
router.use('/api/v1/chats', chatRouter);
router.use('/api/v1/messages', messageRouter);
router.use('/api/v1/notifications', notificationRouter);

export default router;
