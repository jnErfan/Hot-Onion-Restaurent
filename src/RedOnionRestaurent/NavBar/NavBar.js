import React from 'react';
import "./Navbar.css";
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
<Navbar bg="light" variant="light" expand="md">

  <Container>
   <div>
   <Navbar.Brand href="#home"> <img width="100px" src="https://i.ibb.co/PhHBD5V/logo2.png" alt="" /> </Navbar.Brand>
   </div>
   
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav.Link className="navItem" href="#home">Home</Nav.Link>
      <Nav className="me-auto dropdown">
      <NavDropdown  title="Foods" id="basic-nav-dropdown">
          <NavDropdown.Item href="#breakfast">Breakfast</NavDropdown.Item>
          <NavDropdown.Item href="#lunch">Lunch</NavDropdown.Item>
          <NavDropdown.Item href="#dinner">Dinner</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      <Nav.Link className="navItem" href="#services">Services</Nav.Link>
      
    </Navbar.Collapse>
    </div>
    <div>
   
   <i className="fas fa-shopping-cart fs-4 me-5"></i>
    <Button variant="outline-dark px-3 py-0 mb-2 rounded-pill fw-bold">LOGIN</Button>
    <Button variant="dark px-3 py-0 mb-2 rounded-pill ms-3 fw-bold">SIGN UP</Button>
    </div>
  </Container>

</Navbar>
    );
};

export default NavBar;