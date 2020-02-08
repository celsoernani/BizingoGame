import React from 'react';

import { Container, InputChat,ButtonSend,Messages  } from './styles';

export default function Chat() {
  return (
    <Container>
      <h4 style = {{fontFamily: 'Roboto', margin: 0, alignSelf: 'center'}}> CHAT </h4>
      <Messages/>
      <InputChat />
      <ButtonSend >
        ENVIAR
      </ButtonSend>
    </Container>
  );
}
