import React, { useState, useEffect } from 'react';
import PokemonGrid from '../components/PokemonGrid';
import PokemonFilter from '../components/PokemonFIlter';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    // Fetch Pokémon data
    const fetchPokemons = async () => {
      try {
        const response = await fetch('http://localhost:5000/pokemon/limit=50');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemons(
          pokemonDetails.map((p) => ({
            id: p.id,
            name: p.name,
            types: p.types.map((t) => t.type.name),
            sprite: p.sprites.front_default,
          }))
        );
      } catch (err) {
        console.error('Error fetching Pokémon:', err);
      }
    };

    // Fetch Types
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        setTypes(data.results.map((type) => type.name));
      } catch (err) {
        console.error('Error fetching types:', err);
      }
    };

    fetchPokemons();
    fetchTypes();
  }, []);

  const handleTypeSelect = (selected) => {
    setSelectedTypes(selected);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    selectedTypes.length === 0
      ? true
      : pokemon.types.some((type) => selectedTypes.includes(type))
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <PokemonFilter
        availableTypes={types}
        selectedTypes={selectedTypes}
        onTypeSelect={handleTypeSelect}
      />
      <PokemonGrid pokemons={filteredPokemons} />
    </div>
  );
};

export default Home;
