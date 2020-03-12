import React, {useEffect, useState} from 'react';
import { Container, InputChat,ButtonSend,Scroll  } from './styles';
import MessageBox from './../../components/MessageBox';
import socket from '../../conection/socket';


export default function Chat({player}) {
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
  });

  const sendMessage = (event) => {
      event.preventDefault();
      if(message) {
        // setMessages([...messages, {player: player.name, text: message}]);
        socket.emit('sendMessage', {name: player.name, text: message}, () => setMessage(''));
        setMessage('')
      }
}

  return (
    <Container>
      <h4 style = {{ margin: 0, alignSelf: 'center', color: 'white'}}> CHAT </h4>
      <Scroll >
      {messages.map((message ,i) =>
            <MessageBox key = {i} message = {message} sameName = {player.name}/>
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

