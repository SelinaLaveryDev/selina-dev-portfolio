import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Sections/About.css'

export default function NavBar() {

    return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary sticky-nav">
      <Container>
        <Navbar.Brand href="/">SelinaLaveryDev</Navbar.Brand>
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