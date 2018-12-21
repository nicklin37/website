import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CustomNavBar from './components/CustomNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
          <Route exact path="/website" component={Home} />
          <Route path="#about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
