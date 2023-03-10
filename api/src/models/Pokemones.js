const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  abilities: {
    type: Array,
    default: undefined,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  types: {
    type: Array,
    default: undefined,
    required: true,
  },
  images: {
    type: Array,
  },
});


const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = (Pokemon);
