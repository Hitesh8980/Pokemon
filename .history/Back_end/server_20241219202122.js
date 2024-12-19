const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const pokemonRoutes = require("./routes/pokemonRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use("/api/pokemon", pokemonRoutes);

// Error Handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
