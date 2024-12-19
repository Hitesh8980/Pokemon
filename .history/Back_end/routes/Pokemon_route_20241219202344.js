const express = require("express");
const { getAllPokemon, addPokemon } = require("../controllers/Pokemon_Controller");

const router = express.Router();

// Routes
router.get("/", getAllPokemon);
router.post("/", addPokemon);

module.exports = router;
