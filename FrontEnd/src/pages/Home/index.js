import React, { useState, useEffect, useCallback } from 'react';
import Game from '../Game';
import Chat from '../Chat';
import queryString from 'query-string';
import SocketContext from './../../context/socket';
import piecesFunction from '../../utils/initialPieces';
import trianglesFunction from '../../utils/trianglesInitial';

function Home({ socket, location }) {
  const [player, setPlayer] = useState('');
  const [session, setSession] = useState(false);
  const [pieces, setPieces] = useState(piecesFunction);
  const [triangles, setTriangles] = useState(trianglesFunction);

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    socket.emit('join', { id: Math.random(), name }, response => {
      setPlayer(response.player);
    });
    setSession(false);
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search]);

  return (
    <>
      {session ? null : (
        <div style={{ display: 'flex' }}>
          <SocketContext.Consumer>
            {socket => <Chat player={player} socket={socket} />}
          </SocketContext.Consumer>

          <SocketContext.Consumer>
            {socket => (
              <Game
                initialPieces={pieces}
                initialTriangles={triangles}
                socket={socket}
                player={player}
              />
            )}
          </SocketContext.Consumer>
        </div>
      )}
    </>
  );
}

const HomeComponent = props => (
  <SocketContext.Consumer>
    {socket => <Home {...props} socket={socket} />}
  </SocketContext.Consumer>
);

export default HomeComponent;
