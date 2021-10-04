import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className="pt-4 pb-4" bg="dark" variant="dark">
                <Container>
                    <NavLink className="h2 text-decoration-none text-light nav-color" to="/">Tech<span> Academy</span></NavLink>
                    <Nav className="ms-auto">
                        <NavLink className="text-decoration-none me-3 h5 text-light nav-color" to="/">Home</NavLink>
                        <NavLink className="text-decoration-none me-3 h5 text-light nav-color" to="/courses">All Courses</NavLink>
                        <NavLink className="text-decoration-none me-3 h5 text-light nav-color" to="/instructor">Instructors</NavLink>
                        <NavLink className="text-decoration-none me-3 h5 text-light nav-color" to="/about">About us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;