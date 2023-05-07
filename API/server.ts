import './alias';
import '@utils/unCaughtException';
import app from './app';
import { settings } from '@config/settings';
import connDB from '@config/database';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import declareUser from '@config/custom';
import { Server } from 'socket.io';
import http from 'http';

connDB();
const port = settings.PORT;

const server: http.Server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

const io = new Server(server, {
  pingTimeout: 60000,
  cors: { origin: '' },
});

io.on('connection', (socket) => {
  socket.on('setup', (userData) => {
    socket.join(userData.id);
    socket.emit('connected');
  });
  socket.on('join chat', (room) => {
    socket.join(room);
  });

  socket.on('isTyping', ({ chatId, userId, userName }) => {
    // Broadcast the isTyping event to all other clients in the same chat room
    socket.broadcast.in(chatId).emit('isTyping', { chatId, userId, userName });
  });
  socket.on('stop typing', ({ chatId, userId }) => {
    socket.broadcast.in(chatId).emit('stop typing', { chatId, userId });
  });
  socket.on('new message', (newMessageReceived) => {
    const { chat } = newMessageReceived;

    if (!chat.customer || !chat.seller)
      return console.log('chat did not have users');
    else {
      socket.in(chat.seller.id).emit('message received', newMessageReceived);
      socket.in(chat.customer.id).emit('message received', newMessageReceived);
    }
  });
});

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
