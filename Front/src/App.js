import React from 'react';
import GlobalStyle from './styles/global';
import {ToastContainer} from 'react-toastify';
import Home from './pages/Home';
import Login from './pages/Login';
import './config/ReacttronConfig';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
       <GlobalStyle/>
       <ToastContainer autoClose = {3000}/>
      <Route path="/" exact component={Login} />
      <Route path="/game" component={Home} />
    </Router>
  );
}

export default App;
