import React, {useState, useEffect} from 'react';
import Game from '../Game';
import Chat from '../Chat';
import InfoGamer from '../../components/InfoGamer';
import io from "socket.io-client";
import queryString from 'query-string';
import {toast} from 'react-toastify';
const ENDPOINT = 'localhost:8000';
const socket = io(ENDPOINT);

export default function Home({location}) {
  const [player, setPlayer] = useState('');
  const [session, setSession] = useState(false);


  useEffect(() => {
    const {name} =  queryString.parse(location.search);
    socket.emit('join', {name}, (response) => {
      if('error' in response) {
      setSession(true);
      return toast.error(response.error);
      }
      setPlayer(response);

    });

    return() => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [location.search ]);
  return (
  <>
  {/* <InfoGamer/> */}
    {session ? null :
    <div style={{ display: 'flex'}}>
    <Game socket = {socket} player = {player}/>
    <Chat socket = {socket} player = {player}/>
   </div> }

   </>
  );
}

