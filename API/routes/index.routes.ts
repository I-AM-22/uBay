import { Router } from 'express';
import userRouter from '@routes/user.routes';
import productRouter from '@routes/product.routes';
import categoryRouter from '@routes/category.routes';
import commentRouter from '@routes/comment.routes';
import chatRouter from '@routes/chat.routes';
import messageRouter from '@routes/message.routes';
import notificationRouter from '@routes/notification.routes';
import storeRouter from '@routes/store.routes';
import couponRouter from '@routes/coupon.routes';

import { settings } from '@config/settings';
import { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger/swagger';
const port = settings.PORT;
const router = Router();

const api = Router();
api.use('/users', userRouter);
api.use('/products', productRouter);
api.use('/comments', commentRouter);
api.use('/categories', categoryRouter);
api.use('/stores', storeRouter);
api.use('/chats', chatRouter);
api.use('/messages', messageRouter);
api.use('/notifications', notificationRouter);
api.use('/coupons', couponRouter);


//API ROUTES
router.use('/api/v1', api);
//swagger page
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Docs in JSON format
router.get('/docs.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

export default router;
