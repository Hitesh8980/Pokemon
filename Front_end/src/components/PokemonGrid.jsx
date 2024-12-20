import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonGrid = ({ pokemons = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          sprite={pokemon.sprite}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
