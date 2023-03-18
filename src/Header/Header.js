import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import React from "react";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MedStore</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
        <Cart />
      </Navbar>
    </>
  );
}
