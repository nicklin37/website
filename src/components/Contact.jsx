import React, {Component} from "react";
import { Row, Col, Image } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import  "../styles/contact.css";


export default class Contact extends Component{
    render(){
        return(
            <div className="contact" align="center">
                <Row>
                    <h1 id="contact">Contact me!</h1>
                    <a href="https://www.linkedin.com/in/nicholas-lin-2758ba156/" target="_blank"><Image src="assets/linkedin.png" className="logo" id="linkedin"/></a>
                    <a href="https://www.github.com/nicklin37"><Image src="assets/github.png" className="logo" /></a>
                    <a href="mailto:nlinucla@gmail.com" ><Image src="assets/email.png" className="logo" /></a>
                </Row> 
            </div>
        )
    }
}