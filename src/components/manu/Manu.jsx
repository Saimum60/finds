import React from 'react'
import "./manu.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Manu = () => {
  return (
    <Navbar expand="lg" className="nv">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/featurespg">Features</Link>
            <Link to="/pricing" >Pricing</Link>
            <Link >FAQ</Link>
            <Link to="/blogus" >Blog</Link>
           
          </Nav>
          <button className='buton'>Contact us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Manu