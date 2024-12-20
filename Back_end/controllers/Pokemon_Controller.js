const Pokemon = require("../models/Pokemon_model");

// Get all Pokemon with pagination and filtering
const getAllPokemon = async (req, res, next) => {
  try {
    const { page = 1, limit = 12, search = "", type = "" } = req.query;
    const query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    if (type) query.types = type;

    const pokemon = await Pokemon.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Pokemon.countDocuments(query);

    res.status(200).json({ pokemon, total });
  } catch (error) {
    next(error);
  }
};

// Get a single Pokemon by ID
const getPokemonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);

    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }

    res.status(200).json(pokemon);
  } catch (error) {
    next(error);
  }
};

// Add a new Pokemon
const addPokemon = async (req, res, next) => {
  try {
    const newPokemon = new Pokemon(req.body);
    const savedPokemon = await newPokemon.save();
    res.status(201).json(savedPokemon);
  } catch (error) {
    console.error("Error adding Pokemon:", error.message);
    res.status(400).json({ message: error.message });
  }
};


// Update a Pokemon by ID
const updatePokemon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPokemon = await Pokemon.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }

    res.status(200).json(updatedPokemon);
  } catch (error) {
    next(error);
  }
};

// Delete a Pokemon by ID
const deletePokemon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPokemon = await Pokemon.findByIdAndDelete(id);

    if (!deletedPokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }

    res.status(200).json({ message: "Pokemon deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPokemon,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
};
