"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./alias");
require("@utils/unCaughtException");
const app_1 = require("./app");
const settings_1 = require("@config/settings");
const database_1 = require("@config/database");
const socket_io_1 = require("socket.io");
const port = settings_1.settings.PORT;
const server = app_1.default.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)();
    console.log(`Example app listening on port ${port}!`);
    console.log(`Docs available at http://localhost:${port}/docs`);
}));
const io = new socket_io_1.Server(server, {
    pingTimeout: 60000,
    cors: { origin: 'https://u-bay.vercel.app' },
});
io.on('connection', (socket) => {
    socket.on('setup', (userData) => {
        socket.join(userData.id);
        socket.emit('connected');
    });
    socket.on('join chat', (room) => {
        console.log('roomId: ' + room);
        socket.join(room);
        socket.emit('joined');
    });
    socket.on('isTyping', ({ chatId, userId, userName }) => {
        socket.broadcast.in(chatId).emit('isTyping', { chatId, userId, userName });
    });
    socket.on('stop typing', ({ chatId, userId }) => {
        socket.broadcast.in(chatId).emit('stop typing', { chatId, userId });
    });
    socket.on('new message', ({ chatId, message }) => {
        socket.to(chatId).emit('message received', { newMessageReceived: message });
        console.log('New message arrived:', { message, chatId });
    });
});
process.on('unhandledRejection', (err) => {
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
        process.exit(0);
    });
});
//# sourceMappingURL=server.js.map