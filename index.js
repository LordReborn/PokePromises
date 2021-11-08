import fetch from "node-fetch";
console.time("test");

const pikachu = "https://pokeapi.co/api/v2/pokemon/pikachu";
const charizard = "https://pokeapi.co/api/v2/pokemon/charizard";
const charmander = "https://pokeapi.co/api/v2/pokemon/charmander";

const pokemonsURL = [pikachu, charizard, charmander];

const createPromises = (pokemonsURL) => {
  return pokemonsURL.map((pokemonURL) => fetch(pokemonURL));
};

const fetchPokemons = (pokemonsURL) => {
  const promises = createPromises(pokemonsURL);
  Promise.all(promises).then(
    console.log("Resolvi todas las promesas"),
    console.timeEnd("test")
  );
};

fetchPokemons(pokemonsURL);