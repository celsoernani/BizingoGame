import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import Board from './../../components/Board';
import {renderBoard} from './../../utils/board';
import {initialPieces} from  './../../utils/initialState';
export default function Game() {
  const [triangles, setTriangles] = useState([]);
  const [stateGame, setstateGame] = useState({
    gameOver: false,
    players: [
      {
        side: 'black',
        isTurn: false,
        label: 'Player One',
      },
      {
        side: 'black',
        isTurn: true,
        label: 'Player Two',
      },
    ],
    pieces: initialPieces,
  });
  useEffect(() => {
      setTriangles(renderBoard());
  }, [])


  return (
    <Container >
      {
      triangles.length > 0 && stateGame.pieces.length > 0 && <Board triangles = {triangles} pieces = {stateGame.pieces} />
      }
    </Container>
  );
}
