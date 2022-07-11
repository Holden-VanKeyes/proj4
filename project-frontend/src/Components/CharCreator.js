import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function CharCreator() {
  return (
    <>
      <h2>Create New Character</h2>
      <div>
        <DropdownButton drop="end" variant="secondary" title="Select" size="lg">
          <Dropdown.Item eventKey="1">Class</Dropdown.Item>
          <Dropdown.Item eventKey="2">Weapon</Dropdown.Item>
          <Dropdown.Item eventKey="3">Magic</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  )
}
export default CharCreator
