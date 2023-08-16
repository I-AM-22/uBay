import './alias';
import '@utils/unCaughtException';
import app from './app';
import { settings } from '@config/settings';
import connDB from '@config/database';
import { Server } from 'socket.io';
import http from 'http';
import dec from './types/custom';

const port = settings.PORT;

const server: http.Server = app.listen(port, async () => {
  await connDB();
  console.log(`Example app listening on port ${port}!`);
  console.log(`Docs available at http://localhost:${port}/docs`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: { origin: 'http://localhost:5432' },
});

io.on('connection', (socket) => {
  socket.on('setup', (userData) => {
    socket.join(userData.id);
    socket.emit('connected');
    console.log(userData);
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
    // socket.broadcast.in(chat).emit('message received', { newMessageReceived });
    socket.to(chat.id).emit("message received",{newMessageReceived});
    console.log("new Message Arrived",newMessageReceived)
    
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
