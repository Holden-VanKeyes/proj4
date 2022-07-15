import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CharCreator from "./Character/CharCreator";
import CharGallery from "./Character/CharGallery"
import CampCreator from "./Campaign/CampCreator";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import User from "./User";
import { useState, useEffect } from "react";
import AllCamps from "./Campaign/AllCamps";
import AuthApp from "./AuthApp";

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
          navigate("home");
        } else {
          return null;
        }
      });
  }, []);

  console.log("currentUser", currentUser);

  function handleLogin(newUser) {
    setCurrentUser(newUser);
  }

  function handleLogout() {
    setCurrentUser("");
  }

  return (
    <div>
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
        <Route path="/Character/CharGallery" element={<CharGallery />} />
        <Route path="/Campaign/CampCreator" element={<CampCreator />} />
        <Route path="/Campaign/AllCamps" element={<AllCamps />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<AuthApp currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;