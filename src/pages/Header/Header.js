import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';




const Header = () => {



    return (
        <div>
            <Navbar expand="lg" className='navbar' >
                <Container>
                    <Navbar.Brand className='hospital-name' >City Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/home'} className="link">Home</Nav.Link>
                            <Nav.Link as={Link} exact to={'/about'} className="link">About</Nav.Link >

                            <Nav.Link href="#services" className="link">Services</Nav.Link>
                            <Nav.Link href="#doctors" className="link">Doctors</Nav.Link>
                            <Nav.Link href="#g" as={Link} exact to={'/contact'} className="link">Contact Us</Nav.Link>

                        </Nav>


                        <Navbar.Text>
                            <Nav.Link as={Link} to={"/register"} className="link">Register</Nav.Link>


                            {/* {
                                user.email ?
                                    <Nav.Link onClick={logOut} className="link">LogOut</Nav.Link>

                                    : <Nav.Link as={Link} to={"/registration"} className="link">Register</Nav.Link>
                            } */}


                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;