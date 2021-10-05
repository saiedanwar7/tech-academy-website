import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className="pt-3 pb-3" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className="h2 text-decoration-none text-light nav-color" to="/">Tech<span> Academy</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Link className="text-decoration-none me-3 h5 text-light nav-color" to="/">Home</Link>

                        <Link className="text-decoration-none me-3 h5 text-light nav-color" to="/courses">All Courses</Link>

                        <Link className="text-decoration-none me-3 h5 text-light nav-color" to="/instructor">Instructors</Link>

                        <Link className="text-decoration-none me-3 h5 text-light nav-color" to="/about">About Us</Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;





