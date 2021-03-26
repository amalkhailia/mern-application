import React from 'react'
import { Navbar, Nav,NavDropdown } from "react-bootstrap";

const Navba = () => {
    return (
        
        <header>
       <Navbar bg="light" expand="lg">
  
    <Nav className="mr-auto">
      <Nav.Link >Home</Nav.Link>
        <NavDropdown.Item >About us</NavDropdown.Item>
        <NavDropdown.Item>contacts</NavDropdown.Item>
    </Nav>
</Navbar>
        </header>



    )
}

export default Navba
