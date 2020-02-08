const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use('/', (req, res) => {
  res.render('index.html');
});

let messages = [];

io.on('connection', socket => {

  console.log(`Cliente se conectou ao servidor com : ${socket.id}`);
  socket.emit('previousMessage', messages);
  socket.on('sendMessage', data => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(8000);


