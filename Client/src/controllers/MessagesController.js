const GameClient = require('../services/game');

class MessagesController {
  async create(name, text) {
    const response = await GameClient.CreateMessage({message: {name,text}});
    return response;
  }
  async find(id){
    const response = await GameClient.FindMessages({id});
    return response;
  }
}

module.exports = new MessagesController();