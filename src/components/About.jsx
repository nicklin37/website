import React, {Component} from "react";
import { Row, Col, Image } from "react-bootstrap";
import  "../styles/About.css";
import about from "../data/about.json";

export default class About extends Component{
    render(){
        return(
            <div>
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
            </div>
        )
    }
}