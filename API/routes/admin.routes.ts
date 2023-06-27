import express, { Request, Response, NextFunction } from 'express';
import {
  getAllAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from '@controllers/admin.controller';
import passport from 'passport';
import { restrictTo } from '@middlewares/auth.middleware';
import { login } from '@controllers/auth.controller';

const router = express.Router();

// Authenticate user before accessing admin routes &  Restrict access to super admins

// Create a new admin
router.post('/login', login('admin'));
router.use(
  passport.authenticate('jwt', { session: false, failWithError: true }),
  restrictTo('superadmin')
);

// Get all admins
router.get('/', getAllAdmins);

// Get a specific admin
router.get('/:id', getAdmin);

// Create a new admin
router.post('/', createAdmin);

// Update an admin
router.patch('/:id', updateAdmin);

// Delete an admin
router.delete('/:id', deleteAdmin);

export default router;
