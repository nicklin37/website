import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomNavBar from './components/CustomNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
          <Route exact path="/website" component={Home} />
          <Route path="/website#about" component={About} />
          <Route path="/website#projects" component={Projects} />
          <route path="/website#contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
