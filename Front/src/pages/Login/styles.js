import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color:  #BC97CC;
   text-align: center;
   height: 100vh;
`;
export const ContainerInputs = styled.div`
  width: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;

`
export const Title  = styled.h1`
  color: white;
  padding-bottom: 10px;
`;
export const Input = styled.input`
  padding: 0.8em;
  margin: 0.5em;
  color: #9e4770 ;
  width: 100%;
  margin-bottom: 20px;
  background: white;
  border: none;
  border-radius: 3px;
`;
export const ButtonEnter = styled(Link)`
  padding: 0.5em;
  margin: 0.5em;

  color: white;
  background-color: #201A23;
  width: 50%;
  border-radius: 3px;
  &:hover{
    background:#4a3c52;

  }
`
