import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/Home.css';

export default class Home extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>I'm Nick Lin</h2>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        );
    }
}