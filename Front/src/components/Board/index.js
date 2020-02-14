import React, {useEffect} from 'react';
import TriangleBoard from './../../components/TriangleBoard';
import Piece from './../../components/Piece';
import {findTriangleByPiece, findPieceByTriangle} from './../../moves/';
import { Container } from './styles';

export default function Board({triangles, pieces, movePiece}) {
  return (
    <Container>
      { pieces.map(piece => {
        const positionPiece = findTriangleByPiece(triangles,piece);
        if(piece.alive && positionPiece ){
          return <Piece  key = {piece.id} piece = {piece} positionPiece = {positionPiece} movePiece = {movePiece} />
        }
      })}
    {triangles.map(triangle =>
      {
        const foundPiece = findPieceByTriangle(pieces, triangle);
        if(foundPiece){
          triangle.piece = foundPiece;
        }
        return <TriangleBoard key = {triangle.label}   movePiece = {movePiece} triangle = {triangle}/>
      }

    )}
    </Container>
  );
}
