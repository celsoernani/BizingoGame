import React, {useEffect, useState, useCallback} from 'react';
import Board from './../../components/Board';
import {toast} from 'react-toastify';
import socket from '../../conection/socket';

export default function Game({player, initialPieces, initialTriangles}) {
  console.tron.log(initialPieces, initialTriangles)
  const [selectedPiece, setSelectedPiece] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [stateGame, setstateGame] = useState([{
    players: [],
    pieces: null,
    triangles: null
  }]);



useEffect(() => {
  socket.on('players', ({players}) => {
    const indexPlayer0 = players.findIndex(p => p.side === 0)
    players[indexPlayer0].turn = true;
    if(players.length > 1 ){
      const indexPlayer1 = players.findIndex(p => p.side === 1)
      players[indexPlayer1].turn = false;
      toast.info(`O jogador ${players[indexPlayer0].name} quem começa o jogo.`);
    }
    setstateGame({...stateGame, players});
  });
  socket.on('MOVE_PIECES', ({gameState}) => {
    setstateGame(gameState);
  });

  socket.on('OVER', ({gameState}) => {
    setGameOver(true);
    setstateGame(gameState);
  });
  socket.on('RESET', ({gameState}) => {
    setstateGame(gameState);
    setGameOver(false);
    toast.success('Jogo reiniciado com sucesso.')
  });
  return () => {
    socket.emit('disconnect');
    socket.off();
  }
});
const restartGame = () => {
  setstateGame({...stateGame, gameOver: false});
  setGameOver(false);
  // socket.emit('RESET_GAME', reset);
  toast.success('Jogo reiniciado com sucesso.')
};
const checkKill = (newTriangle,piecesAux,pieceIndex) => {
    const trianglesAux = stateGame.triangles;
    const triangleDown = trianglesAux.find(t => t.top === newTriangle.top + 45 && newTriangle.left === t.left);
    const triangleTop = trianglesAux.find(t => t.top === newTriangle.top - 45 && newTriangle.left === t.left);
    const triangleRight = trianglesAux.find(t => t.left === newTriangle.left - 50 && newTriangle.top === t.top);
    const triangleLeft = trianglesAux.find(t => t.left === newTriangle.left + 50 && newTriangle.top === t.top);

    if('piece' in triangleTop && 'piece' in triangleDown  &&
       'piece' in triangleLeft && 'piece' in triangleRight){
        piecesAux[pieceIndex].alive = false;
        toast.info('Você perdeu a peça movimentada.')
    }else{
      return true
    }
};
const checkKillAll = () => {
  const auxPieces = stateGame.pieces;
  const auxTriangles = stateGame.triangles;
  stateGame.triangles.forEach((triangle)=> {
    if('piece' in triangle) {
      const triangleDown =  stateGame.triangles.find(t => t.top === triangle.top + 45 && triangle.left === t.left);
      const triangleTop =  stateGame.triangles.find(t => t.top === triangle.top - 45 && triangle.left === t.left);
      const triangleRight =  stateGame.triangles.find(t => t.left === triangle.left - 50 && triangle.top === t.top);
      const triangleLeft =  stateGame.triangles.find(t => t.left === triangle.left + 50 && triangle.top === t.top);
    if(triangleDown && triangleTop && triangleRight && triangleLeft){
      if('piece' in triangleTop && 'piece' in triangleDown  &&
          'piece' in triangleLeft && 'piece' in triangleRight){
          const killPiece =  stateGame.pieces.find(p => p.labelPosition === triangle.label);
          delete triangle.piece;
          killPiece.alive = false;
          setstateGame({...stateGame, pieces: [...auxPieces,killPiece ], triangles: [...auxTriangles, triangle] })
          socket.emit('CHANGE_GAME', stateGame);
          toast.info("Peça morta");
      }else{

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
    const playerIndexTurn = stateGame.players.findIndex(pl => pl.side === player.side);
    let playersAux = stateGame.players;
    if(playersAux.length > 1){
      if(playerIndexTurn === 0){
        playersAux[0].turn = false;
        playersAux[1].turn = true;
      }else{
        playersAux[0].turn = true;
        playersAux[1].turn = false;
      }
    checkKill(newTriangle,piecesAux,pieceIndex);
    setstateGame({...stateGame, pieces: piecesAux, players:playersAux })
    }else{
      toast.error('Espere seu amigo para jogar.');
    }

};
const removePieceInTriangle = (triangleWithPiece, positionPieceOld) => {
    positionPieceOld.labelPosition = -1;
    const triangleIndex = stateGame.triangles.findIndex(t => t.label === triangleWithPiece.label);
    const trianglesAux = stateGame.triangles;
    delete trianglesAux[triangleIndex].piece;
    setstateGame({
      ...stateGame,
       triangles: trianglesAux
      });
};
const prepMove = (positionTriangle, positionPiece) => {
  const activatePlayer = stateGame.players.findIndex(p => p.turn);
  if(player.side ===  stateGame.players[activatePlayer].side && stateGame.players[activatePlayer].turn){
    if(positionPiece){
      if(positionPiece.side === activatePlayer) {
        setSelectedPiece(positionPiece);
        removePieceInTriangle(positionTriangle,positionPiece);
        verifyGameOver();
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
          socket.emit('CHANGE_GAME', stateGame);
          checkKillAll();
          verifyGameOver();

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
          setGameOver(true)
          socket.emit('GAME_OVER', stateGame);
          toast.warn('Você perdeu o jogo.')
        }
    }
  }
}
  return (
    <div style = {{flex: 1, flexDirection: 'column'}}>

      { gameOver === true  ? <h4 style = {{ margin: 0, alignSelf: 'center', color: 'white', marginLeft: '42%'}}>
              O JOGO ACABOU ! </h4>: null }
      {/* {
       stateGame.triangles.length > 0 && stateGame.pieces.length > 0 &&
       <Board triangles = {stateGame.triangles} restartGame = {restartGame} movePiece = {prepMove}
              pieces = {stateGame.pieces}  />
      } */}
    </div>
  );
}
