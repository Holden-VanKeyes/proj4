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
      .then((userWithCharacters) => {
        setUserCharacters(userWithCharacters.characters);
      });
  }, []);

  console.log("in user, userCharacters:", userCharacters);

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
    <>
      <div id="logout">
        {currentUser.username}
        <Button onClick={handleLogoutClick}>Logout</Button>
        <div>Your Characters</div>
        {userCharacters ? (
          <div>
            {userCharacters.map((character) => {
              return (
                <>
                  <div>NAME: {character.name}</div>
                  <div>order_id: {character.order_id}</div>
                  <div>campaign_id: {character.campaign_id}</div>
                </>
              );
            })}
          </div>
        ) : (
          <div>no characters</div>
        )}
      </div>
    </>
  );
}

export default User;
