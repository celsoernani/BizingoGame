const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 8000;
const PlayerController = require("./controllers/PlayerController");
const MessagesController = require("./controllers/MessagesController");
const GameController = require("./controllers/GameController");

io.on("connection", socket => {
  socket.on("join", async ({ id, name }, callback) => {
    console.log("entrou aqui", id, name);

    const response = await PlayerController.create(id, name);
    const responseFind = await PlayerController.find();
    io.sockets.emit("players", responseFind);
    callback(response);
  });

  socket.on("changeTurn", async (players, callback) => {
    const response = await PlayerController.update(players);
    io.sockets.emit("change_turn", response);
  });

  socket.on("sendMessage", async ({ name, text }, callback) => {
    const response = await MessagesController.create(name, text);
    io.sockets.emit("message", response.message);
  });

  socket.on("changeGame", async ({ stateGame }, callback) => {
    const response = await GameController.update(stateGame);
    io.sockets.emit("move_pieces", response);
  });

  socket.on("RESET_GAME", async ({ reset }, callback) => {
    const response = await GameController.update(reset);
    io.sockets.emit("move_pieces", response);
  });

  // socket.on("disconnect", () => {
  //   // const player = removePlayer(socket.id);
  //   if (player) {
  //     socket.broadcast.emit("message", {
  //       player: player.name,
  //       text: `${player.name} saiu do jogo.`
  //     });
  //   }
  // });
});

server.listen(PORT, console.log(`Client started on port ${PORT}`));
