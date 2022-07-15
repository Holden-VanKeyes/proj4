/*import React, { useEffect, useState } from 'react';
import CharSelection from './CharSelection';

function CharGallery(){
    submitCharacter: { name, class, item },
const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/characters', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => setCharacters(data))
  }, [])
  console.log(characters)

    

return (
  <div>
    <div className="header">
    <div className="headertext">My Characters</div>
    </div>
        <div>
      <CharContainer 
      characters={characters}
     />
    </div>
</div>
)
}


export default CharGallery*/