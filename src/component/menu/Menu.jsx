import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../menu/menu.css'
import Logo from '../../assets/logo.png'

const Manu = () => {
  return (
        <Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
           
           
          </Nav>
          <div className='but'>
            <button> Contact us </button>
          </div>
      </Container>
    </Navbar>

  )
}

export default Manu