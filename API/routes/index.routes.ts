import { Router } from 'express';
import passport from 'passport';
import userRouter from '@routes/user.routes';
import AppError from '@utils/appError';
import privateRouter from '@routes/private.routes';

const router = Router();

router.use('/api/v1/users', userRouter);
router.use('/api/v1/private',privateRouter);

router.all('*', (req, res, next) => {
  //req.originalURl mean the route was sent
  return next(
    new AppError(400, `Can't find ${req.originalUrl} on this server`)
  ); //skip all middleware and go to the errors handler
});

export default router;
