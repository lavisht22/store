import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Store App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
