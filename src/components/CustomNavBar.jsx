import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/CustomNavBar.css';

export default class CustomNavBar extends Component{
    render(){
        return(
            <div>
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/website">Welcome</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="#about" to="/website#about">
                                About
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="#projects" to="/website#projects">
                                Projects
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="#contact" to="/website#contact">
                                Contact
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }   
}