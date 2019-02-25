import React from 'react';
import '../components/Css/About.css';
import { Grid, Row, Col } from 'react-flexbox-grid';


const About = () => {
    return(
        <React.Fragment>
            <div className="about-bg">
                <Grid>
                    <Row>
                        <Col xs={false} sm={false} md={12} lg={12}>
                            <div className="div-image">
                                <p className="about-image"></p>
                                <h2>GERALD CHRIS H. DIZON</h2>
                                <p className="about-title">Designer & Developer</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="about-me">
                <Grid>
                    <Row>
                        <Col xs={false} sm={false} md={12} lg={12}>
                            <h4>ABOUT ME</h4>
                            <p>I’m a passionate student who loves programming. Creating and designing projects is one of my skills,<br/> 
                            Other than that I have few background also with 3D model and animation.  I’m willing and open for<br/>  
                            new opportunities and a career where I could use and develop all of my skills and abilities that I have<br/>  
                            right now in an actual industry.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="about-professional-skills">
                <Grid>
                    <Row>
                        <Col xs={false} sm={false} md={12} lg={12}> 
                            <h4>MY PROFESSIONAL SKILLS</h4>
                            <Row>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    <p className="about-skill-title">HTML</p>
                                    <p className="about-skill-title">CSS</p>
                                    <p className="about-skill-title">JAVASCRIPT</p>
                                    <p className="about-skill-title">PHP</p>
                                    <p className="about-skill-title">BOOTSTRAP 3</p>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                </Col>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    <p className="about-skill-title">HTML</p>
                                    <p className="about-skill-title">CSS</p>
                                    <p className="about-skill-title">JAVASCRIPT</p>
                                    <p className="about-skill-title">PHP</p>
                                    <p className="about-skill-title">BOOTSTRAP 3</p>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4}>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                    <p className="about-skillbar"></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default About; 