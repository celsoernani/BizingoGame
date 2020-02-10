import React from 'react';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Login from './pages/Login';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
       <GlobalStyle/>
      <Route path="/" exact component={Login} />
      <Route path="/game" component={Home} />
    </Router>
  );
}

export default App;
