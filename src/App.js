import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
