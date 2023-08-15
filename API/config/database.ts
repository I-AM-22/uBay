import mongoose from 'mongoose';
import { settings } from './settings';

const DB: any =
  settings.NODE_ENV === 'production'
    ? settings.DB.DATABASE?.replace('<PASSWORD>', settings.DB.PASSWORD)
    : settings.DB.DATABASE_LOCAL;
const ConnDB = async () => {
  return mongoose
    .connect(DB)
    .then(() => console.log('DB connection succeeded'))
    .catch(() => console.log('Mongo connection error'));
};

export default ConnDB;
