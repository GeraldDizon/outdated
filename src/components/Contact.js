import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../components/Css/Contact.css';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import Navbar from '../components/Navbar';

const Contact = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={10} lg={8} className = "bg-contact-content">
                        <div className ="contact-content">
                            <h1>CONTACT ME</h1>
                            <p>FEEL FREE TO CONTACT ME IF YOU HAVE QUESTION.</p>
                            <form>
                                <div className ="contact-content-input">
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <input type = "text" placeholder="Firstname" className ="contact-content-fname"/>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <input type = "text" placeholder="Lastname" className ="contact-content-lname"/>  
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs sm md lg>
                                            <input type = "text" placeholder="Subject" className ="contact-content-subject"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs sm md lg>
                                            <div className="contact-content-action">
                                                <textarea rows="4" type="text" placeholder="Message"/>
                                                <p align="right">Send</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={4}>
                        <div className="bg-contact">
                            <h1>MY DETAILS</h1>
                            <p className="contact-content-title"><LocationIcon className="contact-icon"/>ADDRESS</p>
                            <p className="contact-content-info">BLOCK 13 LOT 2 MOLAVE ST. GARDEN CITY 2 <br/>
                                QUEEN’S ROW WEST BACOOR CAVITE
                            </p>
                            <p className="contact-content-title"><PhoneIphoneIcon className="contact-icon"/>CONTACT NUMBER</p>
                            <p className="contact-content-info">(+63) - 908 6959 226</p>
                            <p className="contact-content-title"><EmailIcon className="contact-icon"/>EMAIL ADDRESS</p>
                            <p className="contact-content-info">geralddizon84@yahoo.com</p>
                            <p className="contact-content-footer">ALWAYS KEEP IN TOUCH</p>
                        </div>
                    </Col>
                </Row>
            </Grid>

        </React.Fragment>
    )
}

export default Contact; 