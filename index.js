const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.send('Welcome to the socket API');
});

server.listen(1200, () => {
  console.log('server running at http://localhost:1200');
});