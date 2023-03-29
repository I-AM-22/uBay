import mongoose from 'mongoose';
import { settings } from './settings';

const pass: any = settings.DB.PASSWORD;
const DB: any = settings.DB.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection succeeded'))
  .catch(() => console.log('Mongo connection error'));
