import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import "./Navbar.css";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>
        {/* Logo */}

        <Navbar.Brand href="#">
          <img src="/logo.png" alt="logo" className="logo" />
        </Navbar.Brand>

        {/* Toggle */}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="active-link">
              Home
            </Nav.Link>

            <Nav.Link href="#">Company</Nav.Link>

            <Nav.Link href="#">Solutions</Nav.Link>

            <Nav.Link href="#">Process</Nav.Link>

            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          <Button className="launch-btn">
            Launch Your Idea
            <HiOutlineArrowUpRight size={20} className="ms-2" />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
