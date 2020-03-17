const { addPlayer, findPlayers, updatePlayers } = require("../data/players.js");
const {
  addMessage,
  findMessages,
  getMessages
} = require("../data/messages.js");
const { setStateGame } = require("../data/game.js");

module.exports = {
  CreatePlayer(call, callback) {
    const { player } = call.request;
    const responsePlayer = addPlayer(player);
    console.log("bateu aqui");
    //pegar dados no user me algum estado aqui no server.
    return callback(null, responsePlayer);
  },
  FindPlayers(call, callback) {
    const players = findPlayers();
    return callback(null, { players });
  },
  UpdatePlayersServer(call, callback) {
    const { players } = call.request;
    const responsePlayers = updatePlayers(players);
    return callback(null, responsePlayers);
  },
  CreateMessage(call, callback) {
    const { message } = call.request;
    addMessage(message);
    //pegar dados no user me algum estado aqui no server.
    return callback(null, { message });
  },
  FindMessages(call, callback) {
    const messages = findMessages();
    return callback(null, { messages });
  },
  UpdateGameState(call, callback) {
    const { gamestate } = call.request;
    setStateGame(gamestate);
    //pegar dados no user me algum estado aqui no server.
    return callback(null, { gamestate });
  }
};
