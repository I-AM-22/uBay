import { citySchema } from './../schema/city.schema';
import { Router } from 'express';
import {
  createCity,
  deleteCity,
  getCity,
  updateCity,
  getAllCities,
} from '@controllers/city.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import passport from 'passport';
import validate from '@middlewares/validateResource';

const router = Router();


router
  .route('/')
  .get(getAllCities)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    validate(citySchema),
    createCity
  );

router
  .route('/:id')
  .get(getCity)
  .patch(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    updateCity
  )
  .delete(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    deleteCity
  );

export default router;
