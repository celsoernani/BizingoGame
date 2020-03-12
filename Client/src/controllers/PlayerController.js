const GameClient = require('../services/game');

class PlayerController {
  async create(id, name) {
    const response = await GameClient.CreatePlayer({player: {id,name}});
    return response;
  }
  async find(id){
    const response = await GameClient.FindPlayers({id});
    return response;
  }
}

module.exports = new PlayerController();