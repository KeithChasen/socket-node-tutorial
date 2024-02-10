const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');
const messagesRoutes = require('./routes/messages');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messagesRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the socket API');
});

app.listen(1200, () => {
  console.log('server running at http://localhost:1200');
});