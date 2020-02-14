import styled from 'styled-components';

export const PieceContainer = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  position: absolute !important;
  background-color: ${props => props.side === 0 ? `#201A23` : `#FF0701`  };
  top: ${props => props.side === 1 ? (props.top - 5)+`px` :  props.top+`px`|| 0};
  left: ${props => props.left+`px`|| 0};
`

export const PieceCaptain= styled.div`
  height: 15px;
  z-index: 10;
  width: 15px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute !important;
  background-color: ${props => props.side === 0 ? `#00C4BB` :   `#0A4466`  };
  top: ${props => props.side === 1 ? (props.top - 5)+`px` :  props.top+`px`|| 0};
  left: ${props => props.left+`px`|| 0};
`

