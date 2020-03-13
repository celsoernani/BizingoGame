const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000;
const PlayerController = require('./controllers/PlayerController');
const MessagesController = require('./controllers/MessagesController');
const GameController = require('./controllers/GameController');

io.on("connection", socket => {

  socket.on('join', async ({id, name}, callback) => {
    const response = await PlayerController.create(id, name);
    const responseFind = await PlayerController.find();
    io.sockets.emit('players', responseFind);
    callback(response);
  })

  socket.on('sendMessage', async  ({name, text}, callback) => {
    const response = await MessagesController.create(name, text)
    io.sockets.emit('message', response.message);
    callback();
  });

  socket.on('changeGame', async  ({stateGame}, callback) => {
    const response = await GameController.update(stateGame);
    io.sockets.emit('move_pieces',response);
  });

  // socket.on('CHANGE_GAME', (gameState) => {
  //   // sending to all clients except sender
  //   socket.broadcast.emit('MOVE_PIECES', {gameState});
  // });

  // socket.on('RESET_GAME', (gameState) => {
  //   // sending to all clients except sender
  //   socket.broadcast.emit('RESET', {gameState});
  // });

  // socket.on('GAME_OVER', (gameState,) => {
  //   // sending to all clients except sender
  //   socket.broadcast.emit('OVER', {gameState});
  // });

  // socket.on("disconnect", () => {
  //   const player = removePlayer(socket.id);
  //   if(player){
  //     socket.broadcast.emit('message', { player: player.name, text: `${player.name} saiu do jogo.`});
  //   }
  // }
  // );


});

server.listen(PORT, console.log(`Client started on port ${PORT}`));


