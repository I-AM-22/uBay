import { Router } from 'express';
import passport from 'passport';
import { CreateUser, getAllUSers, getUser } from '@controllers/user.controller';
import { login, signup } from '@controllers/auth.controller';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.route('/').post(CreateUser).get(getAllUSers);
router.route('/:id').get(getUser);

export default router;
