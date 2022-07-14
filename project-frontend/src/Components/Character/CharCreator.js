import React from "react";

<<<<<<< HEAD:project-frontend/src/Components/Character/CharCreator.js
import Button from 'react-bootstrap/esm/Button'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CharSelection from './CharSelection'
import './CharCreator.css'
=======
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CharSelection from "./CharSelection";
>>>>>>> main:project-frontend/src/Components/CharCreator.js

function CharCreator() {
  const [newVoyager, setNewVoyager] = useState("");
  const [selection, setSelection] = useState(false);
  const [showAllClasses, setShowAllClasses] = useState([]);

  useEffect(() => {
<<<<<<< HEAD:project-frontend/src/Components/Character/CharCreator.js
    fetch('http://localhost:3000/orders')
=======
    fetch("http://localhost:3000/orders")
>>>>>>> main:project-frontend/src/Components/CharCreator.js
      .then((response) => response.json())
      .then((classes) => setShowAllClasses(classes));
  }, []);

  console.log(showAllClasses);

  function handleCharSelect(choice) {
    setSelection(true);
    setNewVoyager(choice);
  }
  console.log(showAllClasses);
  if (selection) return <CharSelection newVoyager={newVoyager} />;
  else
    return (
      <>
        <div id="charcreatorhead">
          <h2 id="h2">Create New Character</h2>
        </div>
        <Row xs={1} md={4} className="g-4">
          {showAllClasses.map((oneClass) => (
            <Col key={oneClass.name}>
<<<<<<< HEAD:project-frontend/src/Components/Character/CharCreator.js
              <Card style={{ width: '18rem' }}>
=======
              <Card style={{ width: "18rem" }}>
>>>>>>> main:project-frontend/src/Components/CharCreator.js
                <Card.Img variant="top" src={oneClass.image_url} />
                <Card.Body>
                  <Card.Title>{oneClass.name}</Card.Title>
                  <Card.Text>{oneClass.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleCharSelect(oneClass.name)}
                  >
                    Select Class
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
}
export default CharCreator;
