import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignupForm({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  function handleUsername({ target: { value } }) {
    setUsername(value);
  }

  function handlePassword({ target: { value } }) {
    setPassword(value);
  }

  function handlePasswordConfirm({ target: { value } }) {
    setPasswordConfirm(value);
  }

  const handleSubmit = async function fetchPOST(e) {
    e.preventDefault();
    const response = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      //set currentUser state in App to response object
      handleLogin(data);
      navigate("/home");
    } else {
      //set Errors state
      console.log(data.errors);
    }
  };

  return (
    <div
      className="LandingPage"
      style={{
        backgroundImage: `url('https://i.imgur.com/OF1Y6XZ.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="page-title">
        <div className="title">Voyagers</div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={1}></Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsername}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={1}></Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPasswordConfirm"
            >
              <Form.Label column sm={1}></Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handlePasswordConfirm}
                />
              </Col>
            </Form.Group>
            {/* <fieldset>
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
      </Form.Group> */}

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
