import Category from '@models/category.model';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@controllers/handlerFactory';

export const getAllCategories = getAll(Category);
export const getCategory = getOne(Category);
export const createCategory = createOne(Category);
export const updateCategory = updateOne(Category);
export const deleteCategory = deleteOne(Category);
