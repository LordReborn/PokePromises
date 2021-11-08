import fetch from "node-fetch";

const createArrayPokemonsURL = (pokemons) => {
  return pokemons.map(
    (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
};

const createPromises = (ArrayPokemonsURL) => {
  return ArrayPokemonsURL.map((pokemonURL) => fetch(pokemonURL));
};

const fetchPokemons = async (pokemons) => {
  const arrayPokemonsURL = createArrayPokemonsURL(pokemons);
  const promises = createPromises(arrayPokemonsURL);
  const response = Promise.all(promises)
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .catch((error) => console.log(error));
  return response;
};

const getPokemons = async () => {
  const pokemons = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
  ];
  console.time("test");
  const response = await fetchPokemons(pokemons);
  console.log(response);
  console.timeEnd("test");
};

getPokemons();
