const express = require("express");
const { getAllPokemon, addPokemon } = require("../controllers/");

const router = express.Router();

// Routes
router.get("/", getAllPokemon);
router.post("/", addPokemon);

module.exports = router;
