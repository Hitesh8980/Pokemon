const express = require("express");
const {
  getAllPokemon,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
} = require("../controllers");

const router = express.Router();

// CRUD routes
router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.post("/", addPokemon);
router.put("/:id", updatePokemon);
router.delete("/:id", deletePokemon);

module.exports = router;
