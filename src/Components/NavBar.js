import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SelinaLaveryDev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Hero</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Kionnali Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kionnali App Prototype</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Story Builder
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">React Native App</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Kionnali Pre-Order Website
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}