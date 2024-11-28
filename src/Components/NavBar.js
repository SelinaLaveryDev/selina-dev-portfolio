import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Sections/About.css'
import logo from '../assets/SLlogo 2.png'

export default function NavBar() {

    return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary sticky-nav">
      <Container>
        <Navbar.Brand href="https://selinalaverydev.github.io/selina-dev-portfolio/">
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        SelinaLaveryDev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#about" >About</Nav.Link>
            <Nav.Link href="#skills" >Skills</Nav.Link>
            <Nav.Link href="#projects" >Projects</Nav.Link>
            <Nav.Link href="#contact" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}