import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/esm/Button'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function CharSelection(newVoyager) {
  console.log(newVoyager)
  //need fetch to handle displaying the 'selected voyager' based on the id attached to 'newVoyager'
  function handleCreation(e) {
    if (e === 'Armor') return console.log('Chainmail')
    else if (e === 'Weapon') return console.log('Sword')
    else if (e === 'Magic') return console.log('Fire')
    else return null
  }
  return (
    <div>
      <DropdownButton
        drop="end"
        variant="secondary"
        title="Select"
        size="lg"
        onSelect={handleCreation}
      >
        <Dropdown.Item eventKey="Armor">Armor</Dropdown.Item>
        <Dropdown.Item eventKey="Weapon">Weapon</Dropdown.Item>
        <Dropdown.Item eventKey="Magic">Magic</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default CharSelection
