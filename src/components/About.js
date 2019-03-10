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
                            <p>I’m a passionate student who loves programming. Creating and designing projects is one of my skills,
                            Other than that I have few background also with 3D model and animation.  I’m willing and open for  
                            new opportunities and a career where I could use and develop all of my skills and abilities that I have 
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
                                <Col xs={false} sm={false} md={5} lg={4}>
                                    <p className="about-skill-title">HTML</p>
                                    <p className="about-skill-title">CSS</p>
                                    <p className="about-skill-title">JAVASCRIPT</p>
                                    <p className="about-skill-title">PHP</p>
                                    <p className="about-skill-title">BOOTSTRAP 3</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-1"><p>HTML</p></div></div>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-2"><p>CSS</p></div></div>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-3"><p>JAVASCRIPT</p></div></div>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-4"><p>PHP</p></div></div>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-5"><p>BOOTSTRAP 3</p></div></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={false} sm={false} md={5} lg={4}> 
                                    <p className="about-skill-title">BLENDER</p>
                                    <p className="about-skill-title">3DS MAX</p>
                                    <p className="about-skill-title">PHOTOSHOP</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-6"><p>BLENDER</p></div></div>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-7"><p>3DS MAX</p></div></div>
                                    <div className="bg-about-skillbar"><div className="about-skillbar-8"><p>PHOTOSHOP</p></div></div>
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