import React, {useState, useEffect, useCallback} from 'react';
import Game from '../Game';
import Chat from '../Chat';
import queryString from 'query-string';
import {toast} from 'react-toastify';
import socket from '../../conection/socket';
import piecesFunction from '../../utils/initialPieces';
import trianglesFunction from '../../utils/trianglesInitial';
export default function Home({location}) {
  const [player, setPlayer] = useState('');
  const [session, setSession] = useState(false);
  const [pieces, setPieces] = useState(piecesFunction);
  const [triangles, setTriangles] = useState(trianglesFunction);

  useEffect(() => {
    const {name} =  queryString.parse(location.search);
    socket.emit('join', ({id: Math.random(),name}), (response) => {
      console.tron.log(response)
      setPlayer(response.player);
    });
    setSession(false);
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
    <Game initialPieces ={pieces}  initialTriangles = {triangles} player = {player}/>
   </div> }

   </>
  );
}

