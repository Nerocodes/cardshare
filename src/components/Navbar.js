import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";

const MainNav = () => {
    return (
        <Navbar>
            <LinkContainer to="/">
                <Navbar.Brand>
                <img
                    src="https://res.cloudinary.com/drlcfqzym/image/upload/v1572110475/cardshare.png"
                    width="204"
                    height="84"
                    className="d-inline-block align-top"
                    alt="card share logo"
                />
                </Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
                <Nav.Link href="#how-it-works">How it works</Nav.Link>
                <LinkContainer to="/gifts">
                    <Nav.Link>Gifts</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/causes">
                    <Nav.Link>Causes</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default MainNav;