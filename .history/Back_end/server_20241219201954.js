const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const pokemonRoutes = require("./routes/pokemonRoutes");
const errorHandler = require("./utils/errorHandler");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/pokemon", pokemonRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;