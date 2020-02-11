import React, {useState, useEffect} from 'react';
import Game from '../Game';
import Chat from '../Chat';
import InfoGamer from '../../components/InfoGamer';
import io from "socket.io-client";
import queryString from 'query-string';

const ENDPOINT = 'localhost:8000';
const socket = io(ENDPOINT);

export default function Home({location}) {
  const [name, setName] = useState('');

  useEffect(() => {
    const {name} =  queryString.parse(location.search);
    setName(name);

    socket.emit('join', {name}, () => {
    });
    socket.on('ingame', ({player_name}) => {
      alert(`Bem vindo ! ${player_name}`)
    })

    return() => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [location.search ]);
  return (
  <>
  {/* <InfoGamer/> */}
   <div style={{ display: 'flex'}}>
    <Game socket = {socket} name = {name}/>
    <Chat socket = {socket}  name = {name}/>
   </div>
   </>
  );
}

