const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000;


const ChatController = require('./controllers/ChatController');

// app.use(routes);

io.on("connection", socket => {
  
  socket.on('teste', async  (id, message) => {
    // var bodyEncodedInString = String.fromCharCode.apply(String, new Uint8Array(message));
    // console.log("esse",bodyEncodedInString);
    const response = await ChatController.send(id);

  })
  
  // socket.on("join", ({name}, callback) => { 
  //   console.log(`Jogador se conectou ao servidor com: 
  //                 ${socket.id} e se chama ${name}`);
  //   const {error, player} = addPlayer({id: socket.id, name})
  //   if(error) callback({error: error});
  //   socket.join('game');
  //   io.to('game').emit('players', { players: getPlayers() });
  //   callback(player)
  // });

  // socket.on('sendMessage', (message, callback) => {
  //   const {error, player} = getPlayer(socket.id);
  //   if(error) return callback(error);
  //     // sending to all clients except sender
  //   socket.broadcast.emit('message', { player: player.name, text: message });
  //   callback();
  // });
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


