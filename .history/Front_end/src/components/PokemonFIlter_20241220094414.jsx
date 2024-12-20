import React from 'react';

const PokemonFilter = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {availableTypes.map((type) => (
        <button
          key={type}
          className={`px-4 py-2 rounded ${
            selectedTypes.includes(type)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => toggleType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonFilter;
