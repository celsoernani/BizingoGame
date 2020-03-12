const renderBoard = () => {
  const triangles = [];
  var initial_left = 405;
  var quant_pices = 5;
  var top = 40;
  var left = initial_left;
  var label = 0;
  while(quant_pices <= 21){
  for(var j = 0; j < quant_pices; j++){
    const side = j%2 === 0 ? 0 :1 ;
      triangles.push({
        available: false,
        label,
        top,
        left,
        side,
      })

    left += 50;
    label+=  1;
  }
  top += 45;
  left = (initial_left -= 50)
  quant_pices +=  2;
}
quant_pices = 21;
left += 50;
while(quant_pices > 18){
  for( j = 0; j < quant_pices; j++){
    const side = j%2 === 0 ? 1 :0 ;
      triangles.push({
        available: false,
        label,
        top,
        left,
        side,
      })

    left += 50;
    label+=  1;
  }
  top += 45;
  left = (initial_left += 100)
  quant_pices -=  2;
}
    return triangles;
}

const trianglesInitial = renderBoard()
export default trianglesInitial;
