import { config } from 'dotenv';
import mongoose from 'mongoose';
import users from './users.json';
import User from './../../models/user.model';

config({ path: './../../.env' });
const DB = process.env.DATABASE_LOCAL || '';
mongoose.connect(DB).then(() => console.log('DB connection successes'));

const importData = async () => {
  try {
    await User.create(users);
    console.log('imported');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
