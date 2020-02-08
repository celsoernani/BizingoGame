import styled from 'styled-components';

export const PieceContainer = styled.div`
  height: 20px;
  width: 20px;
  z-index: 1000 !important;
  border-radius: 50%;
  position: absolute !important;
  background-color: ${props => props.side == 0 ? `#9E4770` :  `#201A23` };
  top: ${props => props.top+`px`|| 0};
  left: ${props => props.left+`px`|| 0};
`
