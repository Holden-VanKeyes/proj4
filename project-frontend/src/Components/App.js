import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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
        <Route
          path="/user-home"
          element={
            <User currentUser={currentUser} handleLogout={handleLogout} />
          }
        />
        <Route path="/create-camp" element={<CampCreator />} />
        <Route path="/show-camps" element={<AllCamps />} />
      </Routes>
    </div>
  );
}

export default App;
