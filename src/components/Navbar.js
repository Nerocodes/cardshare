import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainNav = () => {
    return (
<<<<<<< HEAD
=======
        // <nav className="main-nav">
        //     <div className="logo-container">
        //         <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1572110475/cardshare.png" alt="logo"></img>
        //     </div>
        //     <ul className="links">
        //         <Link to="/how-it-works"><li>How it works</li></Link>
        //         <Link to="/how-it-works"><li>Categories</li></Link>
        //         <Link to="/how-it-works"><li>Register</li></Link>
        //         <Link to="/how-it-works"><li>Login</li></Link>
        //     </ul>
        // </nav>
>>>>>>> 38777a9df1a0eb0ef9f7ae33794829d527b11c21
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
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default MainNav;