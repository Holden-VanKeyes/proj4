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
import LoginContainer from "./LandingPage/LoginContainer";

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    username: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.username) {
          handleLogin(data);
          navigate("user-home");
        } else {
          return null;
        }
      });
  }, []);

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

  console.log("currentUser", currentUser);

  function handleLogin(newUser) {
    setCurrentUser(newUser);
  }

  function handleLogout() {
    setCurrentUser("");
  }

  return (
    <Router>
      <div>
        <nav>
          <div className="link">
            <Link
              to="/"
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
        </nav>

        <Routes>
          <Route
            path="/signup"
            element={<SignupForm handleLogin={handleLogin} />}
          />
          <Route
            path="/login"
            element={<LoginForm handleLogin={handleLogin} />}
          />
          <Route
            path="/user-home"
            element={
              <User currentUser={currentUser} handleLogout={handleLogout} />
            }
          />
          <Route path="/Character/CharCreator" element={<CharCreator />} />
          <Route path="/Campaign/CampCreator" element={<CampCreator />} />
          <Route path="/Campaign/AllCamps" element={<AllCamps />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
