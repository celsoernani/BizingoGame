import React from 'react';
import socketio from "socket.io-client";
import GlobalStyle from './styles/global';
import Game from './pages/Game'
import Chat from './pages/Chat'
import InfoGamer from './components/InfoGamer';
// const socket = socketio('http://localhost:8000');


function App() {
  return (
  <>
  <InfoGamer/>
   <div style={{ display: 'flex'}}>
   <GlobalStyle/>
    <Game/>
    <Chat />
   </div>
   </>
  );
}

export default App;
