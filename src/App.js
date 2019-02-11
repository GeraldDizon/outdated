import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CollectionsIcon from '@material-ui/icons/CollectionsOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
import FacebookLogo from './Images/facebooklogoSTART.png';


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
                    <li><HomeIcon style={{color:"white", fontSize:"25px"}}/></li>
                    <li><CollectionsIcon style={{color:"white", fontSize:"25px"}}/></li>  
                    <li><PhoneIphoneIcon style={{color:"white", fontSize:"25px"}}/></li>  
                    
                  </div>
                  <div class = "nav-network">
                  <img src={FacebookLogo} alt="facebook" style={{height:"45px"}}/>  
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
            <div className ='bg-home-picture'>
              <p></p>
            </div>

            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;