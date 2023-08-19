import express from 'express';
import { setIds } from '@middlewares/helper.middleware';
import { chargeMyWallet, getAllWallets } from '@controllers/wallet.controller';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';
import Wallet from '@models/wallet.model';
import { deleteOne, getOne } from '@controllers/handlerFactory';

const router = express.Router();

router.use(
  passport.authenticate('jwt', { failWithError: true, session: false }),
  restrictTo('admin', 'superadmin', 'employee')
);

// POST /charge route to charge the wallet

router.route('/chargeMyWallet').post(chargeMyWallet);
router.get('/:id', getOne(Wallet));

export default router;
