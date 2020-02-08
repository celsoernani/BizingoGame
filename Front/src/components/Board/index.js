import React from 'react';
import TriangleBoard from './../../components/TriangleBoard';
import Piece from './../../components/Piece';

import { Container } from './styles';

export default function Board({triangles, pieces}) {
  console.log(pieces)
  return (
    <Container>
      {pieces.map(piece => {

        if(piece.alive){
          return <Piece  key = {piece.id} alive ={piece.alive} captain= {piece.captain}
                         side = {piece.side} top = {piece.top} left = {piece.left} />
        }
      })}
    {triangles.map(triangle => (
      <TriangleBoard key = {triangle.label}  triangle = {triangle}/>
        )
    )}


    </Container>
  );
}
