
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiHomeAlt } from "react-icons/bi";

import './_Header.scss'
import React from 'react'
function Header() {
    const expand = 'md'
  return (
    <>
        <Navbar key={expand} expand={expand} className="mb-3 nav-container" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/"><BiHomeAlt/>Angelic</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Case Studies
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="about">About</Nav.Link>
                  <NavDropdown
                    title="Case Studies"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="willys">Willys</NavDropdown.Item>
                    <NavDropdown.Item href="timata">Timata           
                    </NavDropdown.Item>
                    <NavDropdown.Item href="stimple">Stimple           
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     
    </>
  );
}

export default Header;