import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/Statecontext';
import PokemonGrid from '../components/PokemonGrid';
import PokemonFilter from '../components/PokemonFIlter';
import useFetch from '../hooks/useFetch';
import '../index.css'


const Home = () => {
  const { searchQuery, setSearchQuery, selectedTypes, setSelectedTypes, currentPage, setCurrentPage } = useStateContext();
  const { data: pokemonsData, loading, error } = useFetch('http://localhost:5000/pokemon/');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    if (pokemonsData) {
      setTypes([...new Set(pokemonsData.pokemon.flatMap(p => p.types))]);
    }
  }, [pokemonsData]);

  const filteredPokemons = pokemonsData?.pokemon
    .filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTypes.length === 0 || pokemon.types.some(type => selectedTypes.includes(type)))
    ) || [];

  const handleSearch = (event) => setSearchQuery(event.target.value);
  const handleTypeSelect = (selected) => setSelectedTypes(selected);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon data</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search Pokémon"
        className="p-2 mb-4"
      />
      <PokemonFilter availableTypes={types} selectedTypes={selectedTypes} onTypeSelect={handleTypeSelect} />
      <PokemonGrid pokemons={filteredPokemons} isLoading={loading} />
    </div>
  );
};

export default Home;
