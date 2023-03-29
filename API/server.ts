import mongoose from 'mongoose';
import './alias';
import '@utils/unCaughtException';
import app from './app';
import { settings } from '@config/settings';
import '@config/database';

const port = settings.PORT;

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

//for unhandled rejection like mongo connection failed and this handler work for async rejection
process.on('unhandledRejection', (err: Error) => {
  console.log('UNHANDLED REJECTION Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully!');
  server.close(() => {
    console.log('💥 Process terminated');
  });
});
