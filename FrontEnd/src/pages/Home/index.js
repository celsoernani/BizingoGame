import React, {useState, useEffect} from 'react';
import Game from '../Game';
import Chat from '../Chat';
import queryString from 'query-string';
import {toast} from 'react-toastify';
import socket from '../../conection/socket';


export default function Home({location}) {
  const [player, setPlayer] = useState('');
  const [session, setSession] = useState(false);

  useEffect(() => {
    const {name} =  queryString.parse(location.search);
    socket.emit('join', ({id: '1321',name}), (response) => {
      setPlayer(response.player);
    });
    return() => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [location.search]);


  return (
  <>
  {/* <InfoGamer/> */}
    {session ? null :
    <div style={{ display: 'flex'}}>
    <Chat player = {player}/>
    {/* <Game initialPieces = {initialPieces}  initialTriangles = {initialTriangles} player = {player}/> */}
   </div> }

   </>
  );
}

