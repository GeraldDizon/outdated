import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CollectionsIcon from '@material-ui/icons/CollectionsOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
import AboutMe from '@material-ui/icons/FaceOutlined';
import facebookLogo from '../Images/facebookLogo.png';
import '../components/Css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <React.Fragment>
            <div className="sidenav">
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={false} lg={false}>
                            <div className ="nav-logo">
                                <p>LOGO</p>
                            </div>
                            <div className = "nav-control">
                                <li><NavLink exact to="/" style={{border:"none"}}><HomeIcon style={{color:"white", fontSize:"25px"}}/></NavLink></li>
                                <li><NavLink to="/Projects"><CollectionsIcon style={{color:"white", fontSize:"25px"}}/></NavLink></li>  
                                <li><NavLink to="/Contact"><PhoneIphoneIcon style={{color:"white", fontSize:"25px"}}/></NavLink></li>
                                <li><NavLink to="/About"><AboutMe style={{color:"white", fontSize:"25px"}}/></NavLink></li>   
                            </div>
                            <div className = "nav-network">
                                <img src={facebookLogo} alt="facebook" style={{height:"30px"}}/>  
                            </div>
                        </Col>
                    </Row>
                </Grid> 
            </div>
        </React.Fragment>
    )
   
}

export default Navbar;