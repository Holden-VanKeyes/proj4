import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CharCreator from "./Character/CharCreator";
import CampCreator from "./Campaign/CampCreator";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import User from "./User";
import { useState, useEffect } from "react";
import AllCamps from "./Campaign/AllCamps";

function AuthApp({ currentUser }) {
  //const navigate = useNavigate();

  // redirects to user-home page if session remembers user
  // think i have to change this to an async function
  // useEffect(() => {
  //   fetch("/me", {
  //     credentials: "include",
  //   })
  //     .then((r) => {
  //       if (r.ok) {
  //         r.json();
  //       }
  //     })
  //     .then((data) => {
  //       setCurrentUser(data);
  //       navigate("/user-home");
  //     });
  // }, []);

  return (
    <div>
      <nav>
        <div className="link">
          <Link
            to="/user-home"
            style={{
              textDecoration: "none",
              color: "rgb(115, 34, 191)",
            }}
          >
            Home
          </Link>
        </div>
        <div className="link">
          <Link
            to="/Character/CharCreator"
            style={{
              textDecoration: "none",
              color: "rgb(115, 34, 191)",
            }}
          >
            New Character
          </Link>
        </div>
        <div className="link">
          <Link
            to="/Campaign/CampCreator"
            style={{
              textDecoration: "none",
              color: "rgb(115, 34, 191)",
            }}
          >
            New Campaign
          </Link>
        </div>
        <div className="link">
          <Link
            to="/Campaign/AllCamps"
            style={{
              textDecoration: "none",
              color: "rgb(115, 34, 191)",
            }}
          >
            Campaigns
          </Link>
        </div>
        <div
          className="link"
          style={{
            textDecoration: "none",
            color: "rgb(115, 34, 191)",
          }}
        >
          Hello, {currentUser.username.toUpperCase()}!
        </div>
      </nav>
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
        </div>
      </div>
    </div>
  );
}

export default AuthApp;
