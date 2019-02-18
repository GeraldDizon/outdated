import React from 'react';
import '../components/Css/About.css';
import { Grid, Row, Col } from 'react-flexbox-grid';


const About = () => {
    return(
        <React.Fragment>
            <div class="collection-bg">
                <Grid>
                    <Row>
                        <Col xs={false} sm={false} md={12} lg={12}>
                            <div className="div-image">
                                <p className="collection-image"></p>
                                <h2>GERALD CHRIS H. DIZON</h2>
                                <p className="collection-title">Designer & Developer</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="collection-about-me">
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
            <div className="collection-professional-skills">
                <Grid>
                    <Row>
                        <Col xs={false} sm={false} md={12} lg={12}>
                            <h4>MY PROFESSIONAL SKILLS</h4>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default About; 