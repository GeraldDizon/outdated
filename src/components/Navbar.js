import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CollectionsIcon from '@material-ui/icons/CollectionsOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
import AboutMe from '@material-ui/icons/FaceOutlined';
import facebookLogo from '../Images/facebookLogo.png';
import '../components/Css/Navbar.css';
import { Link } from 'react-router-dom'

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
                                <li><Link to="/Home" style={{border:"none"}}><HomeIcon style={{color:"white", fontSize:"25px"}}/></Link></li>
                                <li><Link to="/Projects"><CollectionsIcon style={{color:"white", fontSize:"25px"}}/></Link></li>  
                                <li><Link to="/Contact"><PhoneIphoneIcon style={{color:"white", fontSize:"25px"}}/></Link></li>
                                <li><Link to="/About"><AboutMe style={{color:"white", fontSize:"25px"}}/></Link></li>   
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