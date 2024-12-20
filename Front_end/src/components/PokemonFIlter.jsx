import React from 'react';

const PokemonFilter = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex items-center justify-center w-64 px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-gray-300 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          id="options-menu"
        >
          Filter by Type
          <svg
            className="ml-2 -mr-1 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {availableTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 ${
                  selectedTypes.includes(type)
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonFilter;
