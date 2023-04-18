import React, { useState, useEffect } from 'react';
import './App.css'; 

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemon(data.results))
      .catch(error => console.error(error));
  }, []);

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    pokemon.forEach(p => {
      fetch(p.url)
        .then(response => response.json())
        .then(data => setPokemonData(prevData => [...prevData, data]))
        .catch(error => console.error(error));
    });
  }, [pokemon]);

  return (
    <div className="pokemon-list-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData.slice(0, 12).map((p, index) => (
            <tr key={p.name}>
              <td>{p.name}</td>
              <td>{p.types.map(type => type.type.name).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PokemonList;
