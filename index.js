const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');
const messagesRoutes = require('./routes/messages');

const { Server } = require('socket.io');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messagesRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the socket API');
});

let onlineUsers = [];

io.on('connection', socket => {
  console.log('socket connected', socket.id);

  socket.on('addNewUser', userId => {
    console.log('addNewUser emitted', userId)

    !onlineUsers.some(user => user.userId === userId) &&
    
    onlineUsers.push({
      userId,
      socketId: socket.id
    });

    console.log(onlineUsers, 'onlineUsers');

    io.emit('getOnlineUsers', onlineUsers);

  })
});

server.listen(1200, () => {
  console.log('server running at http://localhost:1200');
});