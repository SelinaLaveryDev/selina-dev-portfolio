import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Sections/About.css'
import logo from '../assets/SLlogo 2.png'

export default function NavBar() {

    return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary sticky-nav">
      <Container className='nav-container'>
        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link className='link' href="#home" >Home</Nav.Link>
            <Nav.Link className='link' href="#about" >About</Nav.Link>
            <Nav.Link className='link' href="#skills" >Skills</Nav.Link>
            <Nav.Link className='link' href="#projects" >Projects</Nav.Link>
            <Nav.Link className='link' href="#contact" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}