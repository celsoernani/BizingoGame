import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import Board from './../../components/Board';
import {renderBoard} from './../../utils/board';

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
    pieces: [{
      id: 0,
      alive:true,
      captain:true,
      side: 0,
      top: 45,
      left: 410
      }


    ],

  });
  useEffect(() => {
      setTriangles(renderBoard());
  }, [])


  return (
    <Container >
        <Board triangles = {triangles} pieces = {stateGame.pieces} />
    </Container>
  );
}
