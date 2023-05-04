import * as dotenv from 'dotenv';

dotenv.config();

export default process.on('uncaughtException', (err) => {
  //we get rid of the server.close() because this error don't happen async but sync and don't work with server
  //the server happens with async like work with the controller
  console.log('UNCAUGHT EXCEPTION Shutting down...');
  console.log(err);
  process.exit(1);
});
