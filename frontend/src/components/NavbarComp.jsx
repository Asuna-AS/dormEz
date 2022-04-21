import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Home";

function NavbarComp() {
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Container>
          <Navbar.Brand href=""><img src="./Assets/DormEz_logo.png" class="img-fluid"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </div>
  );
}

export default NavbarComp;
