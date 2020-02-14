const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000;
const {addPlayer,removePlayer, getPlayer, getPlayers}  = require('./controllers/players.js');
const routes = require('./routes');

app.use(routes);

io.on("connection", socket => {
  socket.on("join", ({name}, callback) => { 
    console.log(`Jogador se conectou ao servidor com: 
                  ${socket.id} e se chama ${name}`);
    const {error, player} = addPlayer({id: socket.id, name})
    if(error) callback({error: error});
    socket.join(100);
    io.to(100).emit('players', { players: getPlayers() });
    callback(player)
  });

  socket.on('sendMessage', (message, callback) => {
    const {error, player} = getPlayer(socket.id);
    if(error) return callback(error);
    socket.broadcast.emit('message', { player: player.name, text: message });
    callback();
  });
  socket.on("disconnect", () => {
    const player = removePlayer(socket.id);
    if(player){
      socket.broadcast.emit('message', { player: player.name, text: `${player.name} saiu do jogo.`});
    }
  }
  );
});

server.listen(PORT, console.log(`Server started on port ${PORT}`));


