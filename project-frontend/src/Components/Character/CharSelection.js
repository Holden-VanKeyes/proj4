import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import NavHeader from "../NavHeader";

function CharSelection({ chosenClass, currentUser }) {
  const [voyagerName, setVoyagerName] = useState("");

  const [weaponList, setWeaponList] = useState([]);
  const [armorList, setArmorList] = useState([]);
  const [potionList, setPotionList] = useState([]);

  const [firstWeapon, setFirstWeapon] = useState([]);
  const [firstArmor, setFirstArmor] = useState([]);
  const [firstPotion, setFirstPotion] = useState([]);

  const [userCreation, setUserCreation] = useState([]);

  const order_id = chosenClass.id;

  const navigate = useNavigate();

  console.log("in charselection, currentUser:", currentUser);
  console.log("in charselection, order_id:", order_id);
  console.log("in charselection, chosenClass:", chosenClass);
  useEffect(() => {
    fetch("/items")
      .then((response) => response.json())
      .then((items) => {
        const weapons = items.filter((item) => item.category === "Weapon");

        const armor = items.filter((item) => item.category === "Armor");
        const potions = items.filter((item) => item.category === "Potion");
        setFirstWeapon(items[0]);

        setFirstArmor(items[10]);
        setFirstPotion(items[17]);

        setWeaponList(weapons);
        setArmorList(armor);
        setPotionList(potions);
      });
  }, []);

  function handleWeaponSelect(e) {
    const newWeaponObj = weaponList.filter(
      (weapon) => weapon.name === e.target.value
    );
    const weaponSelection = newWeaponObj[0];
    setFirstWeapon(weaponSelection);
  }

  function handleArmorSelect(e) {
    const newArmorObj = armorList.filter(
      (armor) => armor.name === e.target.value
    );
    const armorSelection = newArmorObj[0];
    setFirstArmor(armorSelection);
  }

  function handlePotionSelect(e) {
    const newPotionObj = potionList.filter(
      (potion) => potion.name === e.target.value
    );
    const potionSelection = newPotionObj[0];
    setFirstPotion(potionSelection);
  }

  function handleUserCreation() {
    setUserCreation({
      name: voyagerName,
      // should be order_id
      order_id: order_id,
      // need user_id from currentUser.id
      weapon: firstWeapon,
      armor: firstArmor,
      potion: firstPotion,
      // maybe add bio field
    });
  }
  console.log(userCreation);
  function handleVoyagerName(e) {
    setVoyagerName(e.target.value);
  }

  function handleSubmitName(e) {
    e.preventDefault();
    // defining newCharacter object to POST to /characters
    const newCharacter = {
      name: voyagerName,
      order_id: order_id,
      user_id: currentUser.id,
      campaign_id: 6,
    };
    console.log("in submit, newCharacter:", newCharacter);
    // fetch POST requests
    fetch("/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCharacter),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((createdCharacter) => {
            console.log("response after character POST:", createdCharacter);
            // defining newCharacterItem objects to POST to /character_items
            const weaponCharacterItem = {
              item_id: firstWeapon.id,
              character_id: createdCharacter.id,
            };
            console.log(
              "in submit, weaponCharacterItem: ",
              weaponCharacterItem
            );
            const armorCharacterItem = {
              item_id: firstArmor.id,
              character_id: createdCharacter.id,
            };
            console.log("in submit, armorCharacterItem: ", armorCharacterItem);
            const potionCharacterItem = {
              item_id: firstPotion.id,
              character_id: createdCharacter.id,
            };
            console.log(
              "in submit, potionCharacterItem: ",
              potionCharacterItem
            );
            fetch("/character_items", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(weaponCharacterItem),
            }).then((r) => r.json().then((errors) => console.log(errors)));
            fetch("/character_items", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(armorCharacterItem),
            }).then((r) => r.json().then((errors) => console.log(errors)));

            fetch("/character_items", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(potionCharacterItem),
            }).then((r) => r.json().then((errors) => console.log(errors)));
          });
        } else {
          r.json().then((errors) => console.log(errors));
        }
      })
      .then(() => {
        // redirect to user-home
        navigate("/user-home");
      });
  }

  return (
    <>
      {/* <NavHeader /> */}
      <div>a</div>
      <div>b</div>
      <Form onSubmit={handleSubmitName}>
        <Form.Group size="sm" className="mb-3" id="char-name">
          <Form.Control
            type="char-name"
            placeholder="Voyager Name"
            onChange={handleVoyagerName}
          />
        </Form.Group>
        <Button id="selection" type="submit">
          CREATE VOYAGER
        </Button>
      </Form>
      <div>
        <InputGroup className="mb-3" id="char-name">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Chosen Class:
          </InputGroup.Text>{" "}
          {chosenClass.name}, ability: {chosenClass.ability}
        </InputGroup>
      </div>
      <Container>
        <div className="char-box">
          <Row className="g-4">
            <Col>
              <Card className="card h-100" style={{ width: "18rem" }}>
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
                      <option key={weapon.id} value={weapon.name}>
                        {weapon.name}
                      </option>
                    ))}
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card h-100" style={{ width: "18rem" }}>
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
                      <option key={armor.id} value={armor.name}>
                        {armor.name}
                      </option>
                    ))}
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card h-100" style={{ width: "18rem" }}>
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
                      <option key={potion.id} value={potion.name}>
                        {potion.name}
                      </option>
                    ))}
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default CharSelection;
