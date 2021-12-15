import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "./Components/Buttons";

const NavBar = () => {
  return (
    <Navbar bg="none" expand="xs">
      <Container>
        <Navbar.Brand className="text-light fw-bold-sm">CODEAXES</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            <ButtonPrimary>Register</ButtonPrimary>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
