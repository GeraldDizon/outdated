import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <div className="sidenav">
              <Col xs={12} sm={12} md={12} lg={false}>
                  <div className ="nav-logo">
                    <p>LOGO</p>
                  </div>
                  <div className = "nav-control">
                    <p>HOME</p>
                    <p>PROJECTS</p>
                    <p>CONTACT ME</p>
                  </div>
                  <div class = "nav-network">
                    <p>FACEBOOK</p>
                  </div>
              </Col>
            </div>
          </Row>

        </Grid> 
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className = "bg-home-content">
                <div className="home-content">

                  <h2>Hello There!</h2>
                  <h2>Im Gerald</h2>
                  <h2>Designer and Developer.</h2>
                  <hr align="left"/>
                  <p>FRONT END DEVELOPER</p>
                  <p>HTML / CSS / JAVASCRIPT / PHP</p> 
                  <p>CONTACT ME</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>Hello There!</h2>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;