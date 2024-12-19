const Pokemon = require("../models/Pokemon");

// Get all Pokemon with pagination and filtering
const getAllPokemon = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = "", type = "" } = req.query;
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

// Add a new Pokemon
const addPokemon = async (req, res, next) => {
  try {
    const newPokemon = new Pokemon(req.body);
    const savedPokemon = await newPokemon.save();
    res.status(201).json(savedPokemon);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPokemon, addPokemon };
