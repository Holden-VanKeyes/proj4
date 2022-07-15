import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/esm/Button'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavHeader from '../NavHeader'

function CharSelection(newVoyager) {
  const [voyagerName, setVoyagerName] = useState('')

  const [weaponList, setWeaponList] = useState([])
  const [armorList, setArmorList] = useState([])
  const [potionList, setPotionList] = useState([])

  const [firstWeapon, setFirstWeapon] = useState([])
  const [firstArmor, setFirstArmor] = useState([])
  const [firstPotion, setFirstPotion] = useState([])

  const [userCreation, setUserCreation] = useState([])
  useEffect(() => {
    fetch('/items')
      .then((response) => response.json())
      .then((items) => {
        console.log(items)
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

  function handleUserCreation() {
    setUserCreation({
      name: voyagerName,
      class: newVoyager.newVoyager,
      weapon: firstWeapon,
      armor: firstArmor,
      potion: firstPotion,
    })
  }
  console.log(userCreation)
  function handleVoyagerName(e) {
    setVoyagerName(e.target.value)
  }

  function handleSubmitName(e) {
    e.preventDefault()
    setVoyagerName(voyagerName)
  }

  return (
    <>
      {/* <NavHeader /> */}
      <Form>
        <Form.Group size="sm" className="mb-3" id="char-name">
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
      {/* <InputGroup size="sm" className="mb-3" id="char-name">
        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup> */}
      <InputGroup size="sm" className="mb-3" id="char-class">
        <InputGroup.Text id="inputGroup-sizing-sm">
          {newVoyager.newVoyager}
        </InputGroup.Text>{' '}
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <div id="char-box">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
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
            <Card style={{ width: '18rem' }}>
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
            <Card style={{ width: '18rem' }}>
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
    </>
  )
}

export default CharSelection
