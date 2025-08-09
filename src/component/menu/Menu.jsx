import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../menu/menu.css'
import Logo from '../../assets/logo.png'

const Manu = () => {
  return (
        <Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about us">About us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
           
           
          </Nav>
          <div className='but'>
            <button> Contact us </button>
          </div>
      </Container>
    </Navbar>

  )
}

export default Manu