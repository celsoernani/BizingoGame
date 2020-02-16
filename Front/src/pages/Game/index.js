import React, {useEffect, useState, useCallback} from 'react';
import Board from './../../components/Board';
import trianglesInitial from './../../utils/trianglesInitial';
import initialPieces from  './../../utils/initialPieces';
import {toast} from 'react-toastify';
import socket from '../../conection/socket';


export default function Game({player}) {
  const [selectedPiece, setSelectedPiece] = useState({});
  const [stateGame, setstateGame] = useState({
    gameOver: false,
    players: [],
    pieces: initialPieces,
    triangles: trianglesInitial
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
    setstateGame({...stateGame, players});
  });
  socket.on('MOVE_PIECES', ({gameState}) => {
    console.log('recebendo estado novo',gameState )
    setstateGame(gameState);
  });
  return () => {
    socket.emit('disconnect');
    socket.off();
  }
});




const restartGame =  () => {
  console.log(trianglesInitial,initialPieces)
  // setstateGame({
  //   ...stateGame,
  //   pieces: initialPiecesRestart,
  //   triangles: initialTriangles
  // })
  console.log('mandando estado novo', stateGame)
  // socket.emit('CHANGE_GAME', stateGame);

}

const alterPositionPiece = (oldPiece) => {
    const pieceIndex = stateGame.pieces.findIndex(p => p.id === oldPiece.id);
    let piecesAux = stateGame.pieces;
    piecesAux[pieceIndex] = oldPiece;
    setstateGame({...stateGame, pieces: piecesAux})
}
const removePieceInTriangle = (triangleWithPiece, positionPieceOld) => {
    positionPieceOld.labelPosition = -1;
    const triangleIndex = stateGame.triangles.findIndex(t => t.label === triangleWithPiece.label);
    const trianglesAux = stateGame.triangles;
    delete trianglesAux[triangleIndex].piece;
    setstateGame({
      ...stateGame,
       triangles: trianglesAux
      });
}

const prepMove = (positionTriangle, positionPiece) => {
  const activatePlayer = stateGame.players.findIndex(p => p.turn);
  if(player.side ===  stateGame.players[activatePlayer].side && stateGame.players[activatePlayer].turn){
    if(positionPiece){
      setSelectedPiece(positionPiece);
      removePieceInTriangle(positionTriangle,positionPiece);
    }else{
        if('id' in selectedPiece){
          if(selectedPiece.side === positionTriangle.side){
            selectedPiece.labelPosition = positionTriangle.label;
            alterPositionPiece(selectedPiece);
          }else{
            toast.error("Você só pode se movimentar para triangulos da mesma cor.")

          }
          // activatePlayer.turn
          setSelectedPiece({});
          socket.emit('CHANGE_GAME', stateGame);


        }else{
          toast.error('Selecione uma peça.');
        }

    }

  }else{
    toast.error('Não é sua vez.')
  }
}


  return (
    <>
      {
       stateGame.triangles.length > 0 && stateGame.pieces.length > 0 &&
       <Board triangles = {stateGame.triangles} restartGame = {restartGame} movePiece = {prepMove}
              pieces = {stateGame.pieces} />
      }
    </>
  );
}
