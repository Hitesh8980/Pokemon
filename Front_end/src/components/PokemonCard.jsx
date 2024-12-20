import React, { useState } from 'react';

const PokemonCard = ({ sprite, name, stats }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full h-64 perspective">
      <div
        className={`w-full h-full relative transform-style-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front side of the card */}
        <div className="absolute w-full h-full backface-hidden bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src={sprite}
            alt={name}
            loading="lazy"
          />
        </div>

        {/* Back side of the card (showing Pokémon stats) */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-md p-6 text-white flex flex-col justify-between items-center transform rotate-y-180 shadow-xl">
          {/* Pokémon Name */}
          <h3 className="font-extrabold text-3xl text-center mb-4 text-shadow-lg">{name}</h3>

          {/* Stats Section */}
          <div className="flex flex-col items-center w-full space-y-4">
            <div className="flex items-center space-x-2">
              {/* HP Icon & Stat */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h2m4 0h2m4 0h2m-9 4h2m2 0h2m2 0h2m-7-8h2m2 0h2m2 0h2M3 8h18M3 16h18"></path>
              </svg>
              <p className="text-2xl font-semibold">{stats.hp}</p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Attack Icon & Stat */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <p className="text-2xl font-semibold">{stats.attack}</p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Defense Icon & Stat */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18"></path>
              </svg>
              <p className="text-2xl font-semibold">{stats.defense}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
