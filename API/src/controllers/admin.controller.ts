import User from '@models/user.model';
import {
  createOne,
  deleteOne,
  updateOne,
  getOne,
  getAll,
} from '@controllers/handlerFactory';

// Create an admin
export const createAdmin = createOne(User, { role: 'admin' });

// Delete an admin
export const deleteAdmin = deleteOne(User);

// Update an admin
export const updateAdmin = updateOne(User);

// Get an admin by ID
export const getAdmin = getOne(User);

// Get all admins
export const getAllAdmins = getAll(User, 'admin');
