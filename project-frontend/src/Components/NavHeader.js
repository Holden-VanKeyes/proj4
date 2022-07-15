import React from 'react'
import { useState } from 'react'
import { Nav, Navbar, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavHeader({ currentUser, showNav }) {
  // const [showNav, setShowNav] = useState(false)
  console.log(showNav)

  function handleCurrentUser() {
    if (currentUser.username === '') return null
    else {
      // setShowNav(true)
      currentUser.username.toUpperCase()
    }
  }
  if (showNav) {
    return (
      <div className="navigation">
        <Navbar
          bg="bbcolors"
          variant="dark"
          fixed="top"
          className="navbar py-4"
        >
          <Navbar.Brand className="nav-link">Voyagers</Navbar.Brand>

          <Nav>
            <Link
              to="/user-home"
              style={{
                padding: '10px',
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)',
              }}
            >
              Logout
            </Link>

            <Link
              to="/Character/CharCreator"
              style={{
                padding: '10px',
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)',
              }}
            >
              New Character
            </Link>
            <Link
              to="/Campaign/CampCreator"
              style={{
                padding: '10px',
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)',
              }}
            >
              New Campaign
            </Link>
            <Link
              to="/Campaign/AllCamps"
              style={{
                padding: '10px',
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)',
              }}
            >
              Campaigns
            </Link>
          </Nav>
          <Badge
            pill
            bg="info"
            style={{
              padding: '10px',
              textDecoration: 'none',
              color: 'rgb(115, 34, 191)',
            }}
          >
            {handleCurrentUser}
            Current User: {currentUser.username}
          </Badge>
        </Navbar>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar
          bg="bbcolors"
          variant="dark"
          fixed="top"
          className="navbar py-4"
        >
          <Navbar.Brand className="nav-link">Voyagers</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}
export default NavHeader
