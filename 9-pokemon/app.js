"use strict";

function effectPokemon() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
  request.send();

  request.addEventListener("load", function () {
    if (this.status === 404) {
      console.error(this.response);
      return;
    };
    
    const url = JSON.parse(this.responseText).abilities[0].ability.url;
    console.log(url);

    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", function () {
      if (this.status === 404) {
        console.error(this.response);
        return;
      }

      const data = JSON.parse(this.responseText);
      console.log(
        data.effect_entries.find((val) => val.language.name === "en")
      );
    });
    checkError(request);
  });

  checkError(request);
}

function checkError(request) {
  request.addEventListener("error", function () {
    console.error("Ошибка запроса");
  });

  request.addEventListener("timeout", function () {
    console.error("Долгое ожидание запроса");
  });
}

effectPokemon();
