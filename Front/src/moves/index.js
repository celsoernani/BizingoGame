
// export const findPieceByTriangle = (triangles, pieces, triangle) => {
//   const piece = pieces.find(p => p.row === square.row && p.column === square.column);
//   return piece || null;
// }

export const findTriangleByPiece = (triangles, piece) => {
  const triangle = triangles.find(triangle => triangle.label === piece.labelPosition);
  return triangle || null;
}
