import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
class App extends Component {
  
  render() {
    return ( 
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path='/Home' exact  component={Home}/>
            <Route path='/Projects' exact  component={Projects}/>
            <Route path='/Contact' exact  component={Contact}/>
            <Route path='/About' exact  component={About}/>
          </Switch>
          </React.Fragment> 
      </Router>
    );
  }
}

export default App;