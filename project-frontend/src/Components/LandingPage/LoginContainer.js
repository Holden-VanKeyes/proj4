import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function LoginContainer() {
  return (
    <>
      <h2>HOME</h2>
      <Button variant="outline-info">
        <Link to="/login">Sign In</Link>
      </Button>
      <Button variant="outline-info">
        <Link to="/signup">Create Account</Link>
      </Button>
      {/* <Button onClick={showSignIn}>Sign In</Button>
        <Button onClick={showCreate}>Create Account</Button> */}
    </>
  );
}

export default LoginContainer;
