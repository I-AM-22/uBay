import { Router } from 'express';
import passport from 'passport';
import JWTStrategy from '@middlewares/passport.config';

const router = Router();

router.get(
  '/',
  passport.authenticate(JWTStrategy, { session: false }),
  (req, res) => res.json({ user: req.user })
);

export default router;
