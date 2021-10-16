import React from 'react';
import "./Navbar.css";
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {

  const {user, logOut} = useAuth();

    return (
<Navbar bg="light" variant="light" expand="md">

  <Container>
   <div>
   <Navbar.Brand href="#home"> <img width="100px" src="https://i.ibb.co/PhHBD5V/logo2.png" alt="" /> </Navbar.Brand>
   </div>
   
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav.Link as={HashLink} className="navItem" to="#home">Home</Nav.Link>
      <Nav className="me-auto dropdown">
      <NavDropdown  title="Foods" id="basic-nav-dropdown">
          <NavDropdown.Item as={HashLink} to="/breakfast#breakfast">Breakfast</NavDropdown.Item>
          <NavDropdown.Item as={HashLink} to="/lunch#lunch">Lunch</NavDropdown.Item>
          <NavDropdown.Item as={HashLink} to="/dinner#dinner">Dinner</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      <Nav.Link as={HashLink} className="navItem" to="#services">Services</Nav.Link>
      
    </Navbar.Collapse>
    </div>

    <div>
   
   <i className="fas fa-shopping-cart fs-4 me-5"></i>
   <span className="fw-bold pe-2 text-danger">
     {user?.displayName || user?.email}
   </span>
    {
      user ? <Button onClick={logOut} variant="outline-dark px-3 py-0 mb-2 rounded-pill fw-bold">LOG OUT</Button> :
      <><HashLink to="/login#login" ><Button variant="outline-dark px-3 py-0 mb-2 rounded-pill fw-bold">LOGIN</Button></HashLink>
      <HashLink to="/signin#signin" ><Button variant="dark px-3 py-0 mb-2 rounded-pill ms-3 fw-bold">SIGN UP</Button></HashLink></>
    }
    
  

    </div>
  </Container>

</Navbar>
    );
};

export default NavBar;