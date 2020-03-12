export const findPieceByTriangle = (pieces, triangle) => {
  const piece = pieces.find(p => p.labelPosition === triangle.label);
  return piece || null;
}
export const findTriangleByPiece = (triangles, piece) => {
  const triangle = triangles.find(triangle => triangle.label === piece.labelPosition);
  return triangle || null;
}
