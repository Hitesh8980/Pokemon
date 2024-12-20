import React from 'react';
import PokemonCard from './PokemonCard';
import Skeleton from './Skeleton';

const PokemonGrid = ({ pokemons, isLoading }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading
        ? Array(8).fill().map((_, index) => <Skeleton key={index} />)
        : pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
    </div>
  );
};

export default PokemonGrid;
