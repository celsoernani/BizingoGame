const GameClient = require('../services/game');

class GameController {
  async update(stateGame) {
    const response = await GameClient.UpdateGameState({gamestate: 
          { pieces: stateGame.pieces,triangles:stateGame.triangles, gameover: stateGame.gameOver }});
    return response;
  }
}

module.exports = new GameController();