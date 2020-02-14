import React from 'react';
import { TriangleUp, TriangleDown } from './styles';
export default function TriangleBoard({triangle, movePiece}) {
  return (

    <>
    {triangle.side === 0 ?
      <TriangleDown onClick = { () => movePiece(triangle, triangle.piece)}
                    top = {triangle.top} left = {triangle.left} available = {triangle.available}/> :
      <TriangleUp  onClick = {() => movePiece(triangle,  triangle.piece)}
                  top = {triangle.top} left = {triangle.left} available = {triangle.available} />  }
    </>
  );
}
