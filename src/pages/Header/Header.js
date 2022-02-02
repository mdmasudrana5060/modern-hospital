import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';




const Header = () => {
    const { user, LogOut } = useAuth();

    return (
        <div>
            <Navbar expand="lg" className='navbar' >
                <Container>
                    <Navbar.Brand className='hospital-name' >Modern Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/home'} className="link">Home</Nav.Link>
                            <Nav.Link as={Link} exact to={'/about'} className="link">About</Nav.Link >

                            <Nav.Link as={Link} exact to={'/hospitalservice'} className="link">Services</Nav.Link>

                            <Nav.Link as={Link} exact to={'/doctordetails'} className="link">Doctors</Nav.Link>
                            <Nav.Link href="#g" as={Link} exact to={'/contact'} className="link">Contact Us</Nav.Link>

                        </Nav>


                        <Navbar.Text>
                            {/* <Nav.Link as={Link} to={"/register"} className="link">Register</Nav.Link> */}
                            {(user.email) && <span style={{ padding: "10px" }}>{user.displayName}</span>}


                            {
                                user.email ?

                                    <Nav.Link onClick={LogOut} className="link">LogOut</Nav.Link>


                                    : <Nav.Link as={Link} to={"/login"} className="link">LogIn</Nav.Link>
                            }


                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;