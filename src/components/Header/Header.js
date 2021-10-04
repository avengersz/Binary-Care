import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="pb-5">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
            <Container>
            <Link to="/home" className="nav-link text-white font-weight-bold">Binary Care</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Link to="/home" className="nav-link text-white">HOME</Link>
                <Link to="/services" className="nav-link text-white">SERVICES</Link>
                <Link to="/about" className="nav-link text-white">ABOUT</Link>
                <Link to="/contact" className="nav-link text-white">CONTACT</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;