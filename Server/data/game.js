let gameState = {};

const setStateGame = (state) => {
  gameState = state; 
  return {gameState};
}
module.exports = {setStateGame}