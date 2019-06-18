import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../styles/Projects.css';
import projects from "../data/projects.json";

export default class Projects extends Component{
    render(){
        return(
            <div>
                <h1 id="projects">Here are some projects that I've done</h1>
                    <ul className="project-field">
                        {projects.map((postDetail)=>{
                            return(
                                <Col xs={12} sm={4} md={4} lg={4}>
                                    <Image src={postDetail.imageurl} className="projects-photo" />
                                    <h2>{postDetail.title}</h2>
                                    <p>{postDetail.desc}</p>
                                </Col>
                            )        
                        })}
                    </ul>
            </div>
        );
    }
}