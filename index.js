const express = require('express');
const { createServer } = require('node:http');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the socket API');
});

server.listen(1200, () => {
  console.log('server running at http://localhost:1200');
});