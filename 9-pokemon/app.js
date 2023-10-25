"use strict";

function effectPokemon() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
  request.send();

  request.addEventListener("load", function () {
    const url = JSON.parse(this.responseText).abilities[0].ability.url;
    console.log(url);

    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", function () {
      const data = JSON.parse(this.responseText);
      console.log(data.effect_entries.find((val) => val.language.name === "en"));
    });
  });
}

effectPokemon();
