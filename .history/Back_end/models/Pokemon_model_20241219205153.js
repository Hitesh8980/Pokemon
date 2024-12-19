const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  types: [{ type: String, required: true }],
  sprite: { type: String, required: true },
  stats: {
    hp: { type: Number, default: 0 },
    attack: { type: Number, default: 0 },
    defense: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
