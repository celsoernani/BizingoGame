import React from 'react';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import './config/ReacttronConfig';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SocketContext from '../src/context/socket';
import * as io from 'socket.io-client';

const socket = io('localhost:8000');

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Route path="/" exact component={Login} />
        <Route path="/game" component={Home} />
      </Router>
    </SocketContext.Provider>
  );
};

export default App;
