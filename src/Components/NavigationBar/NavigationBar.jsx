import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link,NavLink } from "react-router-dom";
import "./NavigationBar.css"

function NavigationBar() {
  return (
    <div>
      <Navbar bg="" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-dark d-flex">
              <img
                className="me-2 rounded-3"
                src="Images/Logo.png"
                alt="logo"
                width="30"
                height="30"
              />
              JourneyVault 
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
              <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
              <NavLink className="nav-link" to="/packages" activeClassName="active">Packages</NavLink>
              <NavLink className="nav-link" to="/contactus" activeClassName="active">Contactus</NavLink>
            </Nav>
            <Button variant="secondary">
            <a 
              href="https://wa.me/918977832632?text=Hey! I'm interested in booking a trip with JourneyVault." 
              className="text-decoration-none text-light"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
