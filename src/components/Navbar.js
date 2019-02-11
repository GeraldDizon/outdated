import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CollectionsIcon from '@material-ui/icons/CollectionsOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
import facebookLogo from '../Images/facebookLogo.png';
import '../components/Css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <React.Fragment>
            <Grid>
                <Row>
                    <div className="sidenav">
                        <Col xs={12} sm={12} md={false} lg={false}>
                            <div className ="nav-logo">
                                <p>LOGO</p>
                            </div>
                            <div className = "nav-control">
                                <li><NavLink to="/"><HomeIcon style={{color:"white", fontSize:"25px"}}/></NavLink></li>
                                <li><NavLink to="/Collection"><CollectionsIcon style={{color:"white", fontSize:"25px"}}/></NavLink></li>  
                                <li><NavLink to="/Contact"><PhoneIphoneIcon style={{color:"white", fontSize:"25px"}}/></NavLink></li>  
                            </div>
                            <div class = "nav-network">
                                <img src={facebookLogo} alt="facebook" style={{height:"30px"}}/>  
                            </div>
                        </Col>
                    </div>
                </Row>
            </Grid> 
        </React.Fragment>
    )
   
}

export default Navbar;