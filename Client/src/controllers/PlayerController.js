const GameClient = require('../services/game');

class PlayerController {
  async create(id, name) {
    const response = await GameClient.CreatePlayer({player: {id,name}});
    console.log(response)
    return response;
  }
  async find(id){
    const response = await GameClient.FindPlayers({id});
    return response;
  }
  async update(newPlayers){
    const {players} = await GameClient.UpdatePlayersServer({players:newPlayers});
    return players;
  }
}

module.exports = new PlayerController();