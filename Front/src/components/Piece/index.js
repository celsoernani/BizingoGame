import React, {useState} from 'react';

import { PieceContainer, PieceCaptain } from './styles';

export default function Piece({piece, positionPiece, movePiece }) {

  return (
    <>
    {
      piece.captain ? <PieceCaptain  onClick = {() => {movePiece(positionPiece, piece  )}}
                      side = { piece.side} top = {positionPiece.top + 8} left = {positionPiece.left + 17} />  :
                      <PieceContainer onClick = {() => {movePiece(positionPiece, piece  )}}
                      side = {piece.side} top = {positionPiece.top + 8} left = {positionPiece.left + 17}  />
    }
    </>
  );
}
