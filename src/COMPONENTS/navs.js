import React from "react";


import { Navbar, Nav, Container } from "react-bootstrap";
const Navs = () => {
  return (
    <Navbar className=""  expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="   container text-warning">Youssef </Navbar.Brand>
        
      </Container>
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#section1">Home</Nav.Link>
            <Nav.Link href="#section2">A la une</Nav.Link>
            <Nav.Link href="#equipe">Equipe</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
