import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function User({ currentUser, handleLogout }) {
  const [userCharacters, setUserCharacters] = useState(null);

  //prob don't need this if get '/me' has current user and their
  //characters
  useEffect(() => {
    fetch(`/user_characters`)
      .then((r) => r.json())
      .then((characters) => setUserCharacters(characters));
  }, []);

  const navigate = useNavigate();

  const handleLogoutClick = async function fetchDELETE() {
    const response = await fetch("/logout", {
      method: "DELETE",
    });
    const data = await response;
    if (response.ok) {
      handleLogout();
      navigate("/");
    } else {
      //set Errors state
      console.log(data.error);
    }
  };

  return (
    <div>
      {currentUser.username}
      <Button onClick={handleLogoutClick}>Logout</Button>
    </div>
  );
}
export default User;
