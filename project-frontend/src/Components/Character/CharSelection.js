import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import Button from 'react-bootstrap/esm/Button'
// import { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CharSelection(newVoyager) {
  console.log(newVoyager);

  //   function handleCreation(e) {
  //     if (e === 'Armor') return console.log('Chainmail')
  //     else if (e === 'Weapon') return console.log('Sword')
  //     else if (e === 'Magic') return console.log('Fire')
  //     else return null
  //   }
  return (
    <>
      <InputGroup size="sm" className="mb-3" id="char-name">
        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3" id="char-class">
        <InputGroup.Text id="inputGroup-sizing-sm">
          {newVoyager.newVoyager}
        </InputGroup.Text>{" "}
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <div id="char-box">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Weapon</Card.Title>
                <Card.Text>
                  Name: <br></br>Info:<br></br> Stats:
                </Card.Text>
                <DropdownButton
                  variant="primary"
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item href="#/action-1">Sword</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Axe</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cleaver</Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Armor</Card.Title>
                <Card.Text>
                  Name: <br></br>Info:<br></br> Stats:
                </Card.Text>
                <DropdownButton
                  variant="primary"
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item href="#/action-1">Shield</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Helmet</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Chainmail</Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Potion</Card.Title>
                <Card.Text>
                  Name: <br></br>Info:<br></br> Stats:
                </Card.Text>
                <DropdownButton
                  variant="primary"
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item href="#/action-1">Fire</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Healing</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Wake The Dead</Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CharSelection;
