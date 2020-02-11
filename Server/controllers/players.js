const players = [];
const addPlayer = ({id, name}) => {
  if(players.length === 2){
    return {error: 'A sessão está lotada.'};
  }
  name = name.trim().toLowerCase();
  const existingPlayer = players.find((player) => player.name === name);

  if(existingPlayer) {
    return {error: 'O Jogador já está na sessão.'}
  }
  const player = {id, name};
  players.push(player);
  return {player};
}

const removePlayer = (id) => {
  const index = players.findIndex((player) => player.id === id);

  if(index !== -1){
    return players.splice(index,1)[0];
  }
}
const getPlayer = (id) => {
  const player = players.find((player) => player.id === id);
  if(player){
    return {player};  
  }
  return {error: 'O Jogador saiu da sessão.'}
  
}

module.exports = {addPlayer,removePlayer, getPlayer}