import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // const [currentCharacter, setCurrentCharacter] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res);
        setCharacters(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <Character name={results.name}/> */}
      { characters.length ? characters.map(char => {
        return <Character char={char} name={char.name} key={char.id} />
      }) : <p>LOADING COMING SOON!!!</p>}
    </div>
  );
}

export default App;
