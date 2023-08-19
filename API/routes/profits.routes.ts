import { getProfitPercentage, createOrUpdatePercentage, getAllProfit } from '@controllers/ProfitPercentag.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import validate from '@middlewares/validateResource';
import { Router } from 'express';
import passport from 'passport';
import { percentageSchema } from '../schema/profit.schema';

const router = Router();
router.use(
  passport.authenticate('jwt', { failWithError: true, session: false }),
  restrictTo('superadmin', 'admin')
);
router.get('/', getAllProfit);
router.get('/percentage', getProfitPercentage);
router.post('/createOrUpdatePercentage', validate(percentageSchema), createOrUpdatePercentage)
export default router;
