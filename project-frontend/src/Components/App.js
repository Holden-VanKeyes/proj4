import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavHeader from "./NavHeader";
import CharCreator from "./CharCreator";
//import CharSelection from "./CharSelection";
import User from "./User";
import CampCreator from "./CampCreator";
import AllCamps from "./AllCamps";
import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    username: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("data from get'/me'", data);
        if (data.ok) {
        }
      });
  }, []);

  console.log("currentUser", currentUser);

  function handleLogin(newUser) {
    setCurrentUser(newUser);
  }

  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={<SignupForm handleLogin={handleLogin} />}
        />
        <Route
          path="/login"
          element={<LoginForm handleLogin={handleLogin} />}
        />
        <Route path="/create-char" element={<CharCreator />} />
        <Route path="/user-home" element={<User currentUser={currentUser} />} />
        <Route path="/create-camp" element={<CampCreator />} />
        <Route path="/show-camps" element={<AllCamps />} />
      </Routes>
    </div>
  );
}

export default App;
