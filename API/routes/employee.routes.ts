import { employeeSchema } from '../schema/employee.schema';
import { Router } from 'express';
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
  getAllEmployee,
} from '@controllers/employee.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import passport from 'passport';
import validate from '@middlewares/validateResource';

const router = Router();

router
  .route('/')
  .get(getAllEmployee)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    validate(employeeSchema),
    createEmployee
  );

router
  .route('/:id')
  .get(getEmployee)
  .patch(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    updateEmployee
  )
  .delete(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    deleteEmployee
  );

export default router;
