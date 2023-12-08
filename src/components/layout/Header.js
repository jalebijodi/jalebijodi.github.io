import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import url from '../images/brand24.png';

const Header = () => {
  return (
    <Container className='g-0'> 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand>
      <Link to="/#">
      <img
              href="/"
              src={url}
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
      </Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav>
     {/*    <Link to="/guide" className="nav-link">GUIDE</Link> */}
          <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScXQpizY_7U1NdC4YDMWxCM6sPkmRTMBea2u50khCdEBjTQUQ/viewform" target="_blank">PROFILE REVIEWS</Nav.Link>
          <Nav.Link href="https://calendly.com/jalebijodi/consulting-session?month=2023-06" target="_blank">CONSULTING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Container>
  )
}

export default Header;