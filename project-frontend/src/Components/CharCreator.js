import React from 'react'

import Button from 'react-bootstrap/esm/Button'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CharSelection from './CharSelection'

function CharCreator() {
  const [newVoyager, setNewVoyager] = useState('')
  const [selection, setSelection] = useState(false)
  const [showAllClasses, setShowAllClasses] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/character_classes')
      .then((response) => response.json())
      .then((classes) => setShowAllClasses(classes))
  }, [])

  function handleCharSelect(choice) {
    setSelection(true)
    setNewVoyager(choice)
  }
  console.log(showAllClasses)
  if (selection) return <CharSelection newVoyager={newVoyager} />
  else
    return (
      <>
        <h2>Create New Character</h2>
        <Row xs={1} md={4} className="g-4">
          {showAllClasses.map((oneClass) => (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={oneClass.image_url} />
                <Card.Body>
                  <Card.Title>{oneClass.name}</Card.Title>
                  <Card.Text>{oneClass.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleCharSelect(oneClass.name)}
                  >
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
}
export default CharCreator
