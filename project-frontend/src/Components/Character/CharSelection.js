import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from 'react-bootstrap/esm/Button'
import { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"

function CharSelection(createVoyager) {

  const [voyagerName, setVoyagerName] = useState('')

  const [weaponList, setWeaponList] = useState([])
  const [armorList, setArmorList] = useState([])
  const [potionList, setPotionList] = useState([])

  const [firstWeapon, setFirstWeapon] = useState([])
  const [firstArmor, setFirstArmor] = useState([])
  const [firstPotion, setFirstPotion] = useState([])

  const [userCreation, setUserCreation] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((items) => {
        const weapons = items.filter((item) => item.category === 'Weapon')

        const armor = items.filter((item) => item.category === 'Armor')
        const potions = items.filter((item) => item.category === 'Potion')
        setFirstWeapon(items[0])

        setFirstArmor(items[10])
        setFirstPotion(items[17])

        setWeaponList(weapons)
        setArmorList(armor)
        setPotionList(potions)
      })
  }, [])

  /*const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch("http://localhost:3000/characters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userCreation),
    })
        .then((r) => r.json())
        .then((newVoyager) => createVoyager(newVoyager));
}*/

  function handleWeaponSelect(e) {
    const newWeaponObj = weaponList.filter(
      (weapon) => weapon.name === e.target.value
    )
    const weaponSelection = newWeaponObj[0]
    setFirstWeapon(weaponSelection)
  }

  function handleArmorSelect(e) {
    const newArmorObj = armorList.filter(
      (armor) => armor.name === e.target.value
    )
    const armorSelection = newArmorObj[0]
    setFirstArmor(armorSelection)
  }

  function handlePotionSelect(e) {
    const newPotionObj = potionList.filter(
      (potion) => potion.name === e.target.value
    )
    const potionSelection = newPotionObj[0]
    setFirstPotion(potionSelection)
  }

  function handleVoyagerName(e) {
    setVoyagerName(e.target.value)
  }

  function handleSubmitName(e) {
    e.preventDefault()
    setVoyagerName(voyagerName)
  }

    /*function handleUserCreation() {
    setUserCreation({
      name: voyagerName,
      class: createVoyager.createVoyager,
      weapon: firstWeapon,
      armor: firstArmor,
      potion: firstPotion,
    })
  }*/


  return (
    <>
    <div className='selectform'>
      <Form>
        <Form.Group className="mb-3" id="char-name">
          <Form.Control
            type="char-name"
            placeholder="Voyager Name"
            onChange={handleVoyagerName}
          />
          <Button type="submit" onSubmit={handleSubmitName}>
            Submit
          </Button>
        </Form.Group>
      </Form>
      {<InputGroup size="sm" className="mb-3" id="char-name">
        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>}
      <InputGroup className="mb-3" id="char-name">
        <InputGroup.Text id="inputGroup-sizing-sm">
          {createVoyager.createVoyager}
        </InputGroup.Text>{" "}
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>
      <Container>
      <div className="char-box" >
        <Row className="g-4">
          <Col>

            <Card className="card h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={firstWeapon.image_url} />

              <Card.Body>
                <Card.Title>Weapon</Card.Title>
                <Card.Text>
                  Name: {firstWeapon.name} <br></br> Stats: {firstWeapon.stat}
                </Card.Text>
                <Form.Select
                  variant="primary"
                  // id="dropdown-basic-button"
                  title="Dropdown button"
                  onChange={handleWeaponSelect}
                >
                  {weaponList.map((weapon) => (
                    <option value={weapon.name}>{weapon.name}</option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
          <Col>

            <Card className="card h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={firstArmor.image_url} />

              <Card.Body>
                <Card.Title>Armor</Card.Title>
                <Card.Text>
                  Name:{firstArmor.name} <br></br> Stats:{firstArmor.stat}
                </Card.Text>
                <Form.Select
                  variant="primary"
                  // id="dropdown-basic-button"
                  title="Dropdown button"
                  onChange={handleArmorSelect}
                >
                  {armorList.map((armor) => (
                    <option value={armor.name}>{armor.name}</option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
          <Col>

            <Card className="card h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={firstPotion.image_url} />

              <Card.Body>
                <Card.Title>Potion</Card.Title>
                <Card.Text>
                  Name:{firstPotion.name} <br></br> Stats:{firstPotion.stat}
                </Card.Text>
                <Form.Select
                  variant="primary"
                  // id="dropdown-basic-button"
                  title="Dropdown button"
                  onChange={handlePotionSelect}
                >
                  {potionList.map((potion) => (
                    <option value={potion.name}>{potion.name}</option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button id="selection" onClick={handleUserCreation}>
          Choose Voyager
        </Button>
      </div>
      </Container>
      </>
  ); 
}

export default CharSelection;
