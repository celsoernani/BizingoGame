import styled from 'styled-components';


export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px  solid transparent;
  border-top: 25px solid #f00;
  position: absolute;
  cursor: pointer;
  top: ${props => props.top+`px`|| 0};
  left: ${props => props.left+`px`|| 0};
`

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom:25px solid #fbfbfb;
  position: absolute;
  cursor: pointer;
  top: ${props => props.top+`px`|| 0};
  left: ${props => props.left+`px`|| 0};

`

