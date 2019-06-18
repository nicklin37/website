import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "react-bootstrap";
import "../styles/Home.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default class Home extends Component {
  render() {
    return (
      <div className="mainbackground">
        
          <div className="picture">
            <h2>Nicholas Lin</h2>
            {/* <p>
              I'm an undergraduate computer science student passionate about
              building scalable projects and programming. Click on the explore
              to learn more about me!
            </p> */}
            <Link to="#about">
              <div id="button">
                <Button componentClass={Link} bsStyle="primary" href="#about" to="/#about">
                  Explore
                </Button>
              </div>
            </Link>
          </div>
          <About/>
          <Projects/>
          <Contact/>
      </div>
    );
  }
}
