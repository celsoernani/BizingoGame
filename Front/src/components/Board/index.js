import React from 'react';
import TriangleBoard from './../../components/TriangleBoard';
import Piece from './../../components/Piece';
import {findTriangleByPiece} from './../../moves/';
import { Container } from './styles';

export default function Board({triangles, pieces}) {
  return (
    <Container>
      { pieces.map(piece => {
        if(piece.alive){
          const positionPiece = findTriangleByPiece(triangles,piece);
          return <Piece  key = {piece.id} alive ={piece.alive} captain= {piece.captain}
                         side = {piece.side}
                         top = {positionPiece.top + 8} left = {positionPiece.left + 17} />
        }
      })}
    {triangles.map(triangle => (
      <TriangleBoard key = {triangle.label}  triangle = {triangle}/>
        )
    )}


    </Container>
  );
}
