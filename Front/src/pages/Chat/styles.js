import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 600px;
  width: 10%;
  min-width: 250px;
  box-sizing: border-box;
  margin-left: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
`
export const InputChat = styled.input`
  border: 1px solid #ddd;
  height: 50px;
  align-self: flex-end;
  width: 100%;
  padding: 0;
  font-size: 14px;
`
export const ButtonSend = styled.button`
  min-height: 50px;
  font-size: 14px;
  width: 100%;
  background: #201A23;
  text-align: center;
  line-height: 50px;
  align-self: flex-end;
  font-weight: bold;
  color: #FFF;
  margin-top: 10px;
`

export const Messages = styled.div`
  border: 1px solid #ddd;
  min-height: 420px;
  height: 100%;
  padding: 20px;
`
