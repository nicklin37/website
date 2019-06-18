import React, {Component} from "react";
import { Row, Col, Image } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import  "../styles/About.css";
import about from "../data/about.json";


export default class About extends Component{
    render(){
        return(
            <div className="about">
                <h1 id="about">Here's what I'm up to</h1>
                    <ul id="about-field" >
                        {about.map((postDetail, index)=>{
                            return(
                                <Row>
                                    <LazyLoad once>
                                    <Col align="center" xs={12} sm={2} md={2} smOffset={3} mdOffset={3}>
                                        <Image src={postDetail.imageurl} className="about-photo"/>
                                    </Col>
                                    <Col xs={12} sm={5} md={5} className="about-tag">
                                        <h2>{postDetail.title}</h2>
                                        <h4>{postDetail.subtitle}</h4>
                                        <p>{postDetail.desc}</p>
                                        {postDetail.extras != "" && <p><a href={postDetail.link} target="_blank">{postDetail.extras}</a></p>}
                                    </Col>
                                    </LazyLoad>
                                </Row> 
                            )        
                        })}
                    </ul>
            </div>
        )
    }
}