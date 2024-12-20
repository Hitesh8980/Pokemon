// src/pages/Home.jsx
import React, { useState } from 'react';
import PokemonGrid from '../components/PokemonGrid';
import PokemonFilter from '../components/PokemonFIlter';

const Home = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTypeSelect = (types) => {
    setSelectedTypes(types);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <PokemonFilter
        selectedTypes={selectedTypes}
        onTypeSelect={handleTypeSelect}
        onSearch={handleSearch}
      />

      <PokemonGrid
        selectedTypes={selectedTypes}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Home;
