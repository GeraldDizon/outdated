import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Collection from './components/Collection';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <React.Fragment>
          <Route path='/Home' component={Home} />
          <Route path='/Collection' component={Collection}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/About' component={About}/>
          </React.Fragment> 
      </BrowserRouter>
    );
  }
}

export default App;