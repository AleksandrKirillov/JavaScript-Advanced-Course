// Переделать 9-pokemon на promise
"use strict";

function getData(url, errorMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
}

function effectPokemon() {
  getData("https://pokeapi.co/api/v2/pokemon/ditto", "Can't read abilities")
    .then((ditto) => {
      return getData(ditto.abilities[0].ability.url, "Can't read effect");
    })
    .then((data) => {
      const effect = data.effect_entries.find(
        (val) => val.language.name === "en"
      );
      console.log(effect.effect);
    })
    .catch((error) => {
      console.log(error);
    });
}

effectPokemon();
