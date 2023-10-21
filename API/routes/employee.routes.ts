import {
  employeeSchema,
  loginInput,
  updateEmployeeSchema,
} from '../schema/employee.schema';
import { Router } from 'express';
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
  getAllEmployee,
  loginEmployee,
  watchEmployee,
} from '@controllers/employee.controller';
import { restrictTo } from '@middlewares/auth.middleware';
import { resizeUserImage, uploadUserPhoto } from '@middlewares/uploadingImage';
import passport from 'passport';
import validate from '@middlewares/validateResource';

const router = Router();
router.post('/login', validate(loginInput), loginEmployee);
router.get(
  '/watchEmployee/:employeeID',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('superadmin', 'admin', 'employee'),
  watchEmployee
);
router
  .route('/')
  .get(getAllEmployee)
  .post(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    uploadUserPhoto,
    // resizeUserImage,
    validate(employeeSchema),
    createEmployee
  );

router
  .route('/:id')
  .get(getEmployee)
  .patch(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    uploadUserPhoto,
    resizeUserImage,
    validate(updateEmployeeSchema),
    updateEmployee
  )
  .delete(
    passport.authenticate('jwt', { session: false, failWithError: true }),
    restrictTo('superadmin', 'admin'),
    deleteEmployee
  );

export default router;
