import { getStatistics } from '@controllers/statistics.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import { Router } from 'express';
import passport from 'passport';

const router = Router();
router.use(
  passport.authenticate('jwt', { failWithError: true, session: false }),
  restrictTo('superadmin', 'admin')
);
router.get('/', getStatistics);
export default router;
