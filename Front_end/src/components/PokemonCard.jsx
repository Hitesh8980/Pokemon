import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonGrid = ({ pokemonList }) => {
  const [view, setView] = useState('grid'); 

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
        >
          Toggle View: {view === 'grid' ? 'List' : 'Grid'}
        </button>
      </div>
      <div
        className={`grid gap-4 ${
          view === 'grid' ? 'grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprite={pokemon.sprite}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonGrid;
