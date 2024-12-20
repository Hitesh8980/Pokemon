import React, { useState } from 'react';

const PokemonCard = ({ name, types, sprite, stats }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative group w-full max-w-xs p-4 border-4 border-gray-300 rounded-lg shadow-lg bg-white hover:bg-blue-50 transition-all duration-300">
      {/* Pokémon Image */}
      <div className="w-full h-48 mb-4 bg-gray-200 rounded-md overflow-hidden flex justify-center items-center transition-transform duration-300 group-hover:scale-105">
        <img
          src={sprite}
          alt={name}
          className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>

      {/* Pokémon Type */}
      <div className="mb-4 text-center text-sm font-semibold text-gray-600">
        {types.join(', ')}
      </div>

      {/* Hover Details */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-75 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-md">
        <div className="text-center">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="text-sm">
            <p>HP: {stats.hp}</p>
            <p>Attack: {stats.attack}</p>
            <p>Defense: {stats.defense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
