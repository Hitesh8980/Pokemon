const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const pokemonRoutes = require("./routes/Pokemon_route");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());


app.use(cors());

app.use("/pokemon", pokemonRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
