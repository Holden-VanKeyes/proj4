import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUserName({ target: { value } }) {
    setUsername(value);
  }

  function handlePassword({ target: { value } }) {
    setPassword(value);
  }

  const handleSubmit = async function fetchPOST(e) {
    e.preventDefault();
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      //set currentUser state in App to response object
      handleLogin(data);
      navigate("/user-home");
    } else {
      //set Errors state
      console.log("errors:", data.errors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={1}></Form.Label>
        <Col sm={5}>
          <Form.Control
            type="username"
            placeholder="Username"
            onChange={handleUserName}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={1}></Form.Label>
        <Col sm={5}>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </Col>
      </Form.Group>

      {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group> */}

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign In</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
