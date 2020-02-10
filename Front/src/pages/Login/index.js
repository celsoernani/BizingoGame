import React, {useState} from 'react';
import { Container,ContainerInputs, Title,Input, ButtonEnter } from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const verifyName = (e) => {
      if(!name){
        alert("Preencha seu nome !")
        e.preventDefault()
      }

  }
  return (
    <Container>
      <ContainerInputs>
      <Title> Jogue Bizingo !</Title>
          <Input placeholder = "Nome" type="text" onChange = {(e) => setName(e.target.value)}/>
          <ButtonEnter onClick={e => verifyName(e)} to ={`/game/?name=${name}`}> JOGAR !</ButtonEnter>
      </ContainerInputs>
    </Container>
  );
}
