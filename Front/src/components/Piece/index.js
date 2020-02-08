import React, {useState} from 'react';

import { PieceContainer } from './styles';

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
    <PieceContainer captain = {captain} side = {side} top = {top} left = {left} />
    </>
  );
}
