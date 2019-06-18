import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../styles/Projects.css';
import projects from "../data/projects.json";


export default class Projects extends Component{

    render(){
        function getProjects(){
            let acc = [];
            let content = [];
            //content.push(<Row>);
            projects.map((postDetail, index) => {
                if (index % 3 == 2){
                    acc.push(
                        <Col className="project-post" align="center" xs={12} sm={4} md={4} lg={4}>
                            <Image src={postDetail.imageurl} className="projects-photo" />
                            <h2>{postDetail.title}</h2>
                            {postDetail.extras != "" && <h4>{postDetail.extras}</h4>}
                            <p>{postDetail.desc}</p>
                            <h4>
                            {postDetail.codelink != "" && <a href={postDetail.codelink} target="_blank">Github</a>}
                            {postDetail.demolink != "" && <a href={postDetail.demolink} target="_blank">Demo</a>}
                            </h4>
                        </Col>
                    )
                    content.push(
                        <Row className="project-row">
                            {acc}
                        </Row>
                    )
                    acc = [];
                }else{
                    acc.push(
                    <Col className="project-post" align="center" xs={12} sm={4} md={4} lg={4}>
                        <Image src={postDetail.imageurl} className="projects-photo" />
                        <h2>{postDetail.title}</h2>
                        {postDetail.extras != "" && <h4>{postDetail.extras}</h4>}
                        <p>{postDetail.desc}</p>
                        <h4>
                        {postDetail.codelink != "" && <a href={postDetail.codelink} target="_blank">Github</a>}
                        {postDetail.demolink != "" && <a href={postDetail.demolink} target="_blank">Demo</a>}
                        </h4>
                    </Col>)
                }
            });
            return(
                <div>
                    {content}
                    <Row className="project-row">
                        {acc}
                    </Row>
                </div>
            )
        }

        return(
            <div className="projects">
                <h1 id="projects" >Here are some of my projects</h1>
                {getProjects()}
            </div>  
        );
    };
}