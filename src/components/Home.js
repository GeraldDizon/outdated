import React from 'react';
import '../components/Css/Home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Home = () => {
    return(
        <React.Fragment>
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
    )
}

export default Home;