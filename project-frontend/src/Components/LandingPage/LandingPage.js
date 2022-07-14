import React from "react";
import "./LandingPage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
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
          <Button variant="outline-info">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="outline-info">
            <Link to="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
