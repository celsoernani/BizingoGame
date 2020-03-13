
const {addPlayer,findPlayers,removePlayer,getPlayer} = require('../data/players.js');
const {addMessage,findMessages,getMessages} = require('../data/messages.js');
const {setStateGame} = require('../data/game.js');


module.exports = {
  CreatePlayer(call, callback) {
    const {player} = call.request;
    addPlayer(player);
    //pegar dados no user me algum estado aqui no server. 
    return callback(null, {player})
  },
  FindPlayers(call, callback) {
    const players = findPlayers()
    return callback(null, {players})
  },
  CreateMessage(call, callback) {
    const {message} = call.request;
    addMessage(message);
    //pegar dados no user me algum estado aqui no server. 
    return callback(null, {message})
  },
  FindMessages(call, callback) {
    const messages = findMessages()
    return callback(null, {messages})
  },
  UpdateGameState(call, callback) {
    const {gamestate} = call.request;
    setStateGame(gamestate);
    //pegar dados no user me algum estado aqui no server. 
    return callback(null, {gamestate})
  },
}
