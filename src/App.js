import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import users from './components/Users'

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Users" component={users} />
      </BrowserRouter>
    );
  }
}

export default App;
