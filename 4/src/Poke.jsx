import React, { useState, useEffect } from 'react';
import App from './App';

function Poke() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error(error));
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return <App pokemon={pokemon} />;
}

export default Poke;
