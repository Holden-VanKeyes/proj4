import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavHeader() {
  return (
    <>
      {' '}
      <Navbar bg="primary" variant="light" expand="lg">
        <Navbar.Brand className="nav-link">Voyagers</Navbar.Brand>

        <Nav>
          <Link className="nav-link" to="/create-char">
            New Character
          </Link>
          <Link className="nav-link" to="/user-home">
            Your Voyagers
          </Link>
          <Link className="nav-link" to="/create-camp">
            New Campaign
          </Link>
          <Link className="nav-link" to="/show-camps">
            Join Campaign
          </Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavHeader
