import React from 'react'

import Button from 'react-bootstrap/esm/Button'
import { useState } from 'react'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

function Home() {
  const [signInClick, setSignInClick] = useState(false)
  const [createClick, setCreateClick] = useState(false)

  function showSignIn() {
    setSignInClick(true)
  }
  function showCreate() {
    setCreateClick(true)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }

  if (signInClick) {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={1}></Form.Label>
          <Col sm={5}>
            <Form.Control type="username" placeholder="Username" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={1}></Form.Label>
          <Col sm={5}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign In</Button>
          </Col>
        </Form.Group>
      </Form>
    )
  }
  if (createClick) {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={1}></Form.Label>
          <Col sm={5}>
            <Form.Control type="username" placeholder="Username" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={1}></Form.Label>
          <Col sm={5}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}></Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    )
  } else
    return (
      <>
        <h2>HOME</h2>

        <Button onClick={showSignIn}>Sign In</Button>
        <Button onClick={showCreate}>Create Account</Button>
      </>
    )
}

export default Home
