import Store from '@models/store.model';
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@controllers/handlerFactory';

export const getAllStores = getAll(Store);
export const getStore = getOne(Store);
export const createStore = createOne(Store);
export const updateStore = updateOne(Store);
export const deleteStore = deleteOne(Store);
