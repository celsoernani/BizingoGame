const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000;
const {addPlayer,removePlayer, getPlayer}  = require('./controllers/players.js');
const routes = require('./routes');

app.use(routes);

io.on("connection", socket => {
  socket.on("join", ({name}, callback) => { 
    console.log(`Jogador se conectou ao servidor com: 
                  ${socket.id} e se chama ${name}`);
    const {error, player} = addPlayer({id: socket.id, name})
    if(error) return callback(error);
    socket.emit('ingame', {player_name: player.name})
    callback();
  });
  
  socket.on('sendMessage', (message, callback) => {
    const player = getPlayer(socket.id);
    socket.broadcast.emit('message', { player: player.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    const player = removePlayer(socket.id);
    if(player){
      socket.broadcast.emit('message', { player: player.name, text: "Saiu." });

    }
    console.log("Jogador saiu do jogo. ")
  }
  );
});
// io.on('connection', socket => {

//   socket.emit('previousMessage', messages);
//   socket.on('sendMessage', data => {
//     messages.push(data);
//     socket.broadcast.emit('receivedMessage', data);
//   });
// });

server.listen(PORT, console.log(`Server started on  port ${PORT}`));


