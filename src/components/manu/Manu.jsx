import React from 'react'
import "./manu.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from "../../assets/logo.png"

const Manu = () => {
  return (
    <Navbar expand="lg" className="nv">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about us">About us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#fAQ">FAQ</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
          <button className='buton'>Contact us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Manu