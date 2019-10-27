import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainNav = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">
            <img
                src="https://res.cloudinary.com/drlcfqzym/image/upload/v1572110475/cardshare.png"
                width="204"
                height="84"
                className="d-inline-block align-top"
                alt="card share logo"
            />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/how-it-works">How it works</Nav.Link>
                <Nav.Link href="/gifts">Categories</Nav.Link>
                <Nav.Link href="/causes">Categories</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default MainNav;