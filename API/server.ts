import './alias';
import '@utils/unCaughtException';
import app from './app';
import { settings } from '@config/settings';
import connDB from '@config/database';
import declareUser from '@config/custom';
import { Server } from 'socket.io';
connDB();

const port = settings.PORT;

const server = app.listen(port, () =>
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
    var chat = newMessageReceived.chat;

    if (!chat.users) return console.log('chats.users not defined');
    else {
      chat.users.forEach((user: any) => {
        if (user._id !== newMessageReceived.sender._id)
          socket.in(user._id).emit('message received', newMessageReceived);
      });
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
