import React, {useEffect, useState} from 'react';
import { Container, InputChat,ButtonSend,Scroll  } from './styles';
import MessageBox from './../../components/MessageBox';


export default function Chat({socket, name}) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });
    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

  const sendMessage = (event) => {
      event.preventDefault();
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }

  return (
    <Container>
      <h4 style = {{ margin: 0, alignSelf: 'center'}}> CHAT </h4>
      <Scroll >
        {messages.map((message ,i) =>
            <MessageBox message = {message} name = {name}/>
        )}
      </Scroll>

      <InputChat
        value = {message}
        onChange = {(event) => setMessage(event.target.value)}
        onKeyPress = {(event) => event.key === 'Enter' ? sendMessage(event): null}
      />
      <ButtonSend onClick  = {(event) => sendMessage(event)}>
        ENVIAR
      </ButtonSend>
    </Container>
  );
}

