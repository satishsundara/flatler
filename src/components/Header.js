// src/components/Header.js
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import postPropertyIcon from '../assets/images/post-property-icon.png';
import userIcon from '../assets/images/user-icon.png';
import logo from '../assets/images/flato.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='flato-navbar'>
      
        <Navbar.Brand href="/" className='layout-logo fs-1'>
            <img src={logo} alt="icon" className="image-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-1 nav-layout-text-bar">
            <Nav.Link href="/" className='fs-6'>Ai Search</Nav.Link>
            <Nav.Link href="/" className='fs-6'>Community</Nav.Link>
            <Nav.Link href="/" className='fs-6'>Blog</Nav.Link>
          </Nav>
          <Form className="d-flex gap-2">
            <a href='/postproperty'><Button className="rounded-btn post-property-btn">
                <img src={postPropertyIcon} alt="User Icon" /> Post Property
            </Button></a>

            <Button className="rounded-btn login-btn">
                Login
            </Button>

            <Button className="circle-btn btn btn-primary p-0 border-0">
                <img src={userIcon} alt="icon" className="circle-img" />
            </Button>



          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
