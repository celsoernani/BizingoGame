import React from 'react';

import { TriangleUp, TriangleDown } from './styles';
export default function TriangleBoard({triangle}) {

  return (
    <>
    {triangle.side === 0 ?
      <TriangleDown onClick = { () => console.log("Clicou no botao", triangle.label)}
                    top = {triangle.top} left = {triangle.left} available = {triangle.available}/> :
      <TriangleUp onClick = { () => console.log("Clicou no botao", triangle.label)}
                  top = {triangle.top} left = {triangle.left} available = {triangle.available} />  }
    </>
  );
}
