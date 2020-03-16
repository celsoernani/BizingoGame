import React from 'react';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import './config/ReacttronConfig';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const { GameServiceClient } = require('./pb/game_grpc_web_pb.js');
const { GameRequest, GameResponse } = require('./pb/game_pb.js');

var client = new GameServiceClient('http://localhost:9090', null, null);

const App = () => {
  const callGrpcService = () => {
    const request = new GameRequest();
    request.CreateMessage({
      message: {
        name: 'teste',
        message: 'teste',
      },
    });

    client.CreateMessage(request, {}, (err, response) => {
      if (response == null) {
        console.log(err);
      } else {
        console.log('de merda');
      }
    });
  };

  return (
    <Router>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Route path="/" exact component={Login} />
      <Route path="/game" component={Home} />
    </Router>
  );
};

export default App;
