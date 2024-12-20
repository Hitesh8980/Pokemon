import React, { useState } from 'react';

const PokemonFilter = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
    setIsOpen(false); 
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); 
  };

  const displayText = selectedTypes.length > 0
    ? `Selected: ${selectedTypes.join(', ')}`
    : 'Filter by Type';

  return (
    <div className="flex justify-center mb-6">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex items-center justify-center w-48 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 border border-transparent rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          onClick={toggleDropdown} 
        >
          <span className="text-sm font-semibold">{displayText}</span>
          <svg
            className="ml-2 h-5 w-5 text-white transform transition-transform duration-300"
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

        {/* Only render dropdown if isOpen is true */}
        {isOpen && (
          <div
            className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {availableTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)} 
                  className={`block px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 ${selectedTypes.includes(type) ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white' : 'bg-white text-black'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonFilter;
