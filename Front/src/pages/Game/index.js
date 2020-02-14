import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import Board from './../../components/Board';
import {renderBoard} from './../../utils/board';
import {toast} from 'react-toastify';
import {initialPieces} from  './../../utils/initialState';
export default function Game({socket, player}) {
  const [selectedPiece, setSelectedPiece] = useState({});
  const [stateGame, setstateGame] = useState({
    gameOver: false,
    players: [],
    pieces: initialPieces,
    triangles: renderBoard()
  });


useEffect(() => {
  socket.on('players', ({players}) => {
    const indexPlayer0 = players.findIndex(p => p.side === 0)
    players[indexPlayer0].turn = true;

    if(players.length > 1 ){
      const indexPlayer1 = players.findIndex(p => p.side === 1)
      players[indexPlayer1].turn = false;
      toast.info('O jogador 1 quem começa o jogo.');
    }
    setstateGame({...stateGame, players});
  });
  return () => {
    socket.emit('disconnect');
    socket.off();
  }
}, [stateGame])

const alterPositionPiece = (oldPiece) => {
    const pieceIndex = stateGame.pieces.findIndex(p => p.id === oldPiece.id);
    let piecesAux = stateGame.pieces;
    piecesAux[pieceIndex] = oldPiece;
    setstateGame({...stateGame, pieces: piecesAux})
}
const removePieceInTriangle = (triangleOld) => {

    const triangleIndex = stateGame.triangles.findIndex(t => t.label === triangleOld.label);
    delete triangleOld.piece;
    const trianglesAux = stateGame.triangles;
    trianglesAux.push(triangleOld);
    trianglesAux.splice( trianglesAux.indexOf(triangleIndex), 1 );
    setstateGame({...stateGame, triangles: trianglesAux });

}

const prepMove = (positionTriangle, positionPiece) => {
  const activatePlayer = stateGame.players.find(p => p.turn);
  if(player.side === activatePlayer.side && activatePlayer.turn){
    if(positionPiece){
      const getPiece = stateGame.pieces.find(piec => piec.id === positionPiece.id);
      removePieceInTriangle(positionTriangle);
      setSelectedPiece(getPiece);
    }else{
        if('id' in selectedPiece){
          if(selectedPiece.side === positionTriangle.side){
            selectedPiece.labelPosition = positionTriangle.label;
            alterPositionPiece(selectedPiece);
          }else{
            toast.error("Você só pode se movimentar para triangulos da mesma cor.")

          }
          setSelectedPiece({});

        }else{
          toast.error('Selecione uma peça.');
        }

    }

  }else{
    toast.error('Não é sua vez.')
  }
}

console.log(stateGame.triangles);

  return (
    <Container >

      {
       stateGame.triangles.length > 0 && stateGame.pieces.length > 0 && <Board triangles = {stateGame.triangles}  movePiece = {prepMove} pieces = {stateGame.pieces} />
      }
    </Container>
  );
}
