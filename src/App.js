import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return ( 
      <Router>
        <React.Fragment>
          <Navbar />
          <Route path='/Home' exact strict component={Home} />
          <Route path='/Projects' exact  component={Projects}/>
          <Route path='/Contact' exact  component={Contact}/>
          <Route path='/About' exact  component={About}/>
          </React.Fragment> 
      </Router>
    );
  }
}

export default App;