import React, {useEffect, useState, useCallback} from 'react';
import Board from './../../components/Board';
import {toast} from 'react-toastify';
import socket from '../../conection/socket';


export default function Game({player, initialPieces, initialTriangles}) {
  const [selectedPiece, setSelectedPiece] = useState({});
  const [players, setPlayers] = useState([]);
  const [stateGame, setstateGame] = useState({
    stateGame: false,
    pieces: initialPieces,
    triangles: initialTriangles
  });


useEffect(() => {
  socket.on('players', ({players}) => {
    const indexPlayer0 = players.findIndex(p => p.side === 0)
    players[indexPlayer0].turn = true;
    if(players.length > 1 ){
      const indexPlayer1 = players.findIndex(p => p.side === 1)
      players[indexPlayer1].turn = false;
      toast.info(`O jogador ${players[indexPlayer0].name} quem começa o jogo.`);
    }
    setPlayers(players);
  });
});

useEffect( () => {
  socket.on('move_pieces', (reponseGameState) => {
    setstateGame(reponseGameState.gamestate);})
});

useEffect(() => {
  checkKillAll();
  verifyGameOver();
}, [stateGame])

useEffect( () => {
  socket.on('change_turn', (newPlayers) => {
    setPlayers(newPlayers);})

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  });

useEffect(() => {
  socket.on('OVER', ({gameState}) => {
    setstateGame({gameState});
  });
  socket.on('RESET', ({gameState}) => {
    setstateGame(gameState);
    toast.success('Jogo reiniciado com sucesso.')
  });
  return () => {
    socket.emit('disconnect');
    socket.off();
  }
});


const restartGame = () => {
  setstateGame({...stateGame, gameOver: false});
  socket.emit('RESET_GAME', reset);
  toast.success('Jogo reiniciado com sucesso.')
};
const checkKill = (newTriangle,piecesAux,pieceIndex) => {
    const trianglesAux = stateGame.triangles;
    const triangleDown = trianglesAux.find(t => t.top === newTriangle.top + 45 && newTriangle.left === t.left);
    const triangleRight = trianglesAux.find(t => t.left === newTriangle.left - 50 && newTriangle.top === t.top);
    const triangleLeft = trianglesAux.find(t => t.left === newTriangle.left + 50 && newTriangle.top === t.top);

    if ( triangleDown.piece  && triangleRight.piece && triangleLeft.piece){
        piecesAux[pieceIndex].alive = false;
        setstateGame({...stateGame, piecesAux})
        toast.info('Você perdeu a peça movimentada.')
    }else{
      return true
    }
};
const checkKillAll = () => {
  const auxPieces = stateGame.pieces;
  const auxTriangles = stateGame.triangles;
  stateGame.triangles.forEach((triangle)=> {
    if(triangle.piece ) {
      const triangleDown =  stateGame.triangles.find(t => t.top === triangle.top + 45 && triangle.left === t.left);
      const triangleRight =  stateGame.triangles.find(t => t.left === triangle.left - 50 && triangle.top === t.top);
      const triangleLeft =  stateGame.triangles.find(t => t.left === triangle.left + 50 && triangle.top === t.top);
      if(triangleDown  && triangleRight && triangleLeft){
        if(triangleDown.piece  && triangleRight.piece && triangleLeft.piece){
          const killPiece =  stateGame.pieces.find(p => p.labelPosition === triangle.label);
          if(killPiece){
            delete triangle.piece;
            killPiece.alive = false;
            setstateGame({...stateGame, pieces: [...auxPieces,killPiece ], triangles: [...auxTriangles, triangle] })
            socket.emit('changeGame', {stateGame});
            toast.info("Peça morta");

          }
    }
    }
  }
})
};
const alterPositionPiece = (newPiece, newTriangle) => {
    const pieceIndex = stateGame.pieces.findIndex(p => p.id === newPiece.id);
    let piecesAux = stateGame.pieces;
    piecesAux[pieceIndex] = newPiece;
    //mudando o turno
    const playerIndexTurn = players.findIndex(pl => pl.side === player.side);
    let playersAux = players;
    if(playersAux.length > 1){
      if(playerIndexTurn === 0){
        playersAux[0].turn = false;
        playersAux[1].turn = true;
      }else{
        playersAux[0].turn = true;
        playersAux[1].turn = false;
      }
    checkKill(newTriangle,piecesAux,pieceIndex);
    socket.emit('changeTurn', playersAux);
    setPlayers(playersAux)
    setstateGame({...stateGame, pieces: piecesAux})
    }else{
      toast.error('Espere seu amigo para jogar.');
    }

};

const removePieceInTriangle = (triangleWithPiece, positionPieceOld) => {
  let positionPieceOldAUx = positionPieceOld
  positionPieceOldAUx.labelPosition = -1;
  const triangleIndex = stateGame.triangles.findIndex(t => t.label === triangleWithPiece.label);
  const trianglesAux = stateGame.triangles;
  delete trianglesAux[triangleIndex].piece;
    setstateGame({
      ...stateGame,
       triangles: trianglesAux
      });
};

const prepMove = (positionTriangle, positionPiece) => {
  const activatePlayer = players.findIndex(p => p.turn);
  if((player.side === players[activatePlayer].side) && players[activatePlayer].turn){
    if(positionPiece){
      if(positionPiece.side === activatePlayer) {
        setSelectedPiece(positionPiece);
        removePieceInTriangle(positionTriangle,positionPiece);
      }else{
        toast.error("Você só pode se movimentar suas peças.")
      }

    }else{
      if('id' in selectedPiece){
          if(selectedPiece.side === positionTriangle.side){
            selectedPiece.labelPosition = positionTriangle.label;
            alterPositionPiece(selectedPiece, positionTriangle);
          }else{
            toast.error("Você só pode se movimentar para triangulos da mesma cor.")
          }
          socket.emit('changeGame', {stateGame});
        }else{
          toast.error('Selecione uma peça.');
        }
    }
  }else{
    toast.error('Não é sua vez.')
  }
};

const verifyGameOver = () =>{
  const auxPieces = stateGame.pieces;
  var count = 0; //tem que ser 17 para dar game over
  for(var i = 0; i < auxPieces.length; i++) {
    if (auxPieces[i].alive == false && auxPieces[i].side == player.side ) {
        count = count + 1;
        if(count === 18){
          setstateGame({...stateGame, gameOver: true})
          socket.emit('changeGame', {stateGame});
          toast.warn('Você perdeu o jogo.')
        }
    }
  }
}
  return (
    <div style = {{flex: 1, flexDirection: 'column'}}>
      { stateGame.gameOver === true  ? <h4 style = {{ margin: 0, alignSelf: 'center', color: 'white', marginLeft: '42%'}}>
              O JOGO ACABOU ! </h4>: null }
      {
       stateGame.triangles.length > 0 && stateGame.pieces.length > 0 && players.length > 1 &&
       <Board triangles = {stateGame.triangles}
              pieces = {stateGame.pieces} movePiece = {prepMove}  restartGame = {restartGame}/>
      }
    </div>
  );
}
