import React, {useState, useEffect} from 'react';
import { Container,ContainerInputs, Title,Input, ButtonEnter, IoStyle } from './styles';
import socket from '../../conection/socket';


export default function Login() {
  const [name, setName] = useState('');
  const verifyName = (e) => {
      if(!name){
        alert("Preencha seu nome !")
        e.preventDefault()
      }
  }

  useEffect(() => {
    socket.emit('teste', 1);
  }, [])
  return (
    <Container>
      <ContainerInputs>
        <div style = {{display: 'flex', flexDirection: 'row',marginBottom: '10%'}}>
        <Title>bizingo</Title>
        <IoStyle>Io</IoStyle>
        </div>
          <Input placeholder = "Nome" type="text" onChange = {(e) => setName(e.target.value)}/>
          <ButtonEnter onClick={e => verifyName(e)} to ={`/game/?name=${name}`}> JOGAR !</ButtonEnter>
      </ContainerInputs>
    </Container>
  );
}
