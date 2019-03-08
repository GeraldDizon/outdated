import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../components/Css/Project.css';
const Projects = () =>{
    return(
        <React.Fragment>
            <div className="bg-projects">
                <Grid fluid>
                    <Row>
                        <Col>
                            <div className = "ecommerce-projects">
                                <p>ECOMMERCE-3D</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </React.Fragment>
    );
}
export default Projects;