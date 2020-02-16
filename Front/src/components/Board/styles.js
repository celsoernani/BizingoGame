import styled from 'styled-components';

export const Container = styled.div`
  min-height: 600px;
  height: 100%;
  min-width: 610px;
  width: 100%;
  display: flex;
  position: relative;
  background-color:  #BC97CC;
  flex-direction: row;
  border-width: 1px;
  border: 2px solid white;
  border-radius: 5px;
`


export const ButtonRestart = styled.div`
  display:flex;
  padding: 10px;
  border-radius: 2px;
  align-items: center;
  color: white;
  margin-left: 41%;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 10px;
  background-color: #201A23;
  :hover {
    background-color: #64516e;
}
`
