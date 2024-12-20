import React from 'react';

const PokemonFilter = ({ availableTypes = [], selectedTypes, onTypeSelect }) => {
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap space-x-2">
      {availableTypes.map((type) => (
        <button
          key={type}
          className={`px-3 py-1 rounded-full ${
            selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handleTypeChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonFilter;
