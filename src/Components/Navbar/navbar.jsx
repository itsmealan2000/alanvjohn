import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavScrollExample() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar expand="md" className="bg-auto border-bottom border-3 navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="title">AVJ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='togglebtn'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            {currentPath !== '/' && (
              <Nav.Link href="/" className='links'> Home </Nav.Link>
            )}
            <Nav.Link href="/about" className='links'> About </Nav.Link>
            {/* <Nav.Link href="/projects" className='links'> Projects </Nav.Link> */}
            <Nav.Link href="/contact" className='links'> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
