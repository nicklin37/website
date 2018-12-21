import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "../styles/Home.css";
import about from "../data/about.json";

export default class Home extends Component {
  render() {
    return (
      <div className="mainbackground">
        <Grid>
          <Jumbotron>
            <h2>Nicholas Lin</h2>
            <p>
              I'm an undergraduate computer science student passionate about
              building scalable projects and programming. Click on the explore
              to learn more about me!
            </p>
            <Link to="/about">
              <div id="button">
                <Button bsStyle="primary" href="#about">
                  Explore
                </Button>
              </div>
            </Link>
          </Jumbotron>
          <h1 id="about">Here's what I'm up to</h1>
        <ul>
            {about.map((postDetail, index)=>{
                return(
                    <Row>
                        <Col xs={12} sm={3} smOffset={2}>
                            <Image src={postDetail.imageurl} circle className="about-photo" />
                        </Col>
                        <Col xs={12} sm={5}>
                            <h2>{postDetail.title}</h2>
                            <h4>{postDetail.subtitle}</h4>
                            <p>{postDetail.desc}</p>
                        </Col>
                    </Row>
                )        
            })}
        </ul>
        </Grid>
      </div>
    );
  }
}
