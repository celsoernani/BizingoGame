import React, { useState, useEffect, useCallback } from 'react';
import Game from '../Game';
import Chat from '../Chat';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import socket from '../../conection/socket';
import piecesFunction from '../../utils/initialPieces';
import trianglesFunction from '../../utils/trianglesInitial';
import * as grpcWeb from 'grpc-web';
const { GameServiceClient } = require('../../pb/game_grpc_web_pb.js');
const { AddPlayer, PlayerResponse } = require('../../pb/game_pb.js');

var gameClient = new GameServiceClient('http://localhost:8080');

export default function Home({ location }) {
  const [player, setPlayer] = useState('');
  const [session, setSession] = useState(false);
  const [pieces, setPieces] = useState(piecesFunction);
  const [triangles, setTriangles] = useState(trianglesFunction);

  const callGrpcService = async () => {
    console.tron.log('entrando');
    const request = new AddPlayer();
    request.setId('teste');
    var metadata = {};

    var getTodo = gameClient.createPlayer(
      request,
      metadata,
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          const player = response.player();
          if (player == null) {
            console.tron.log(`A TODO with the ID ${player} wasn't found`);
          } else {
            console.tron.log(
              `Fetched TODO with ID ${player}: ${player.content()}`
            );
          }
        }
      }
    );
  };

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
      {/* <InfoGamer/> */}
      {session ? null : (
        <div style={{ display: 'flex' }}>
          <div onClick={callGrpcService}>teste</div>
          <Chat player={player} />
          <Game
            initialPieces={pieces}
            initialTriangles={triangles}
            player={player}
          />
        </div>
      )}
    </>
  );
}
