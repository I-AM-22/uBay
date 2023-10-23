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
import adminRouter from '@routes/admin.routes';
import cityRouter from '@routes/city.routes';
import employeeRouter from '@routes/employee.routes';
import walletRouter from '@routes/wallet.routes';
import paymentRouter from '@routes/payment.routes';
import deliveryRouter from '@routes/delivery.routes';
import profitsRouter from '@routes/profits.routes';

import { settings } from '@config/settings';
import { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger/swagger';
import statisticsRouter from '@routes/statistics.routes';
const port = settings.PORT;
const router = Router();

const api = Router();
if (settings.NODE_ENV === 'production') {
  router.get('/health', async (req, res, next) => {
    res.status(200).send({ status: 'success' });
  });
}

api.use('/users', userRouter);
api.use('/products', productRouter);
api.use('/comments', commentRouter);
api.use('/categories', categoryRouter);
api.use('/stores', storeRouter);
api.use('/cities', cityRouter);
api.use('/employees', employeeRouter);
api.use('/chats', chatRouter);
api.use('/messages', messageRouter);
api.use('/notifications', notificationRouter);
api.use('/coupons', couponRouter);
api.use('/admins', adminRouter);
api.use('/wallets', walletRouter);
api.use('/payments', paymentRouter);
api.use('/deliveries', deliveryRouter);
api.use('/statistics', statisticsRouter);
api.use('/profits', profitsRouter);
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
