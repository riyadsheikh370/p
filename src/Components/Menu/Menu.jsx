import React from 'react';
import './menu.css'
import { Navbar, Container, Nav, } from 'react-bootstrap';
import Logo from "../../assets/logo.png";
import { IoMdHome } from "react-icons/io";

const Menu = () => {
  return (
    <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='menu_options' href="#home"><IoMdHome className='homeicon' />Home</Nav.Link>
            <Nav.Link className='menu_options' href="#link">About us</Nav.Link>
            <Nav.Link className='menu_options' href="#link">Features</Nav.Link>
            <Nav.Link className='menu_options' href="#link">Pricing</Nav.Link>
            <Nav.Link className='menu_options' href="#link">UX</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
