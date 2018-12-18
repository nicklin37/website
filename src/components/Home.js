import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/Home.css';

export default class Home extends Component{
    render(){
        return(
            <div className="mainbackground">
                <Grid   >
                    <Jumbotron>
                        <h2>Nicholas Lin</h2>
                        <p>I'm an undergraduate computer science student passionate 
                            about building scalable projects and programming. Click on the explore 
                            to learn more about me!</p>
                        <Link to="/about">
                            <div id="button">
                                <Button bsStyle="primary">Explore</Button>
                            </div>
                        </Link>
                    </Jumbotron>
                    <Row className="">

                    </Row>
                </Grid>
            </div>
            
        );
    }
}