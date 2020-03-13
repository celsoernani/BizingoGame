let players = [];

const addPlayer = ({id, name}) => {
  name = name.trim().toLowerCase();
  console.log("tamanho dos players para comparção",players.length )
  const existingPlayer = players.find((player) => player.name === name);
  if(existingPlayer) {
    return {error: 'O Jogador já está na sessão.'}
  }
  const player = {};
  if(players.length > 1){
    return {error: 'A sessão está lotada.'};
  }
  else if(players.length === 0){
     player.id = id;
     player.name = name;
     player.side=  0;
  }else if(players.length === 1){
    player.id = id
    player.name = name
    player.side= 1;
  }
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

const findPlayers = () => {
  if(players.length > 0){
    return players;
  }
  return {error: 'Sem jogadores sessão.'}
}

const updatePlayers = (newPlayers) => {
  players = newPlayers; 
  return {players};
}


module.exports = {addPlayer,removePlayer, getPlayer, findPlayers, updatePlayers}