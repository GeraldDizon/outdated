import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Collection from './components/Collection';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/Collection' component={Collection}/>
          </React.Fragment> 
      </BrowserRouter>
    );
  }
}

export default App;