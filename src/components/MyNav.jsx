import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          My Weather App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className=" text-white nav-link" to="/">
              Home
            </Link>
            <Link className=" text-white nav-link" to="/moon">
              Moon
            </Link>
            <NavDropdown
              title="My Horoscope"
              id="basic-nav-dropdown"
              className="text-title-white"
            >
              <NavDropdown.Item href="#action/3.1" className="text">
                My Sign
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text">
                Ascendant calculation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="text">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
