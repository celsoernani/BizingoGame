import React, {useState} from 'react';

import { PieceContainer, PieceCaptain } from './styles';

export default function Piece({alive, captain,  side, top, left}) {
  const [statePiece, setStatePiece] = useState({
    alive,
    captain,
    side,
    top,
    left
  });

  return (
    <>
    {
      captain ? <PieceCaptain  side = {side} top = {top} left = {left} />  : <PieceContainer  side = {side} top = {top} left = {left} />
    }
    </>
  );
}
