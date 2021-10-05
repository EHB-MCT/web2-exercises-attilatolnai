"use strict"

import Team from "./team.js";
let team = new Team("example teamname","example trainer","example rooster");

console.log("Gotta catch em all");

let list = [];
let pokemons = [];
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    //console.log(data.results)
    list = data.results;
    list.forEach(poke => {
        fetch(poke.url)
        .then(response => response.json())
        .then(pokeData => {
            pokemons.push(pokeData);
        });
    });
  });

  window.onload = function(){
      setTimeout(buildList, 3000);

      function buildList(){
          console.log(pokemons);
          pokemons.forEach(mons => {
            //OK console.log(mons.name)
            //OK console.log(mons.sprites.front_default)
            //OK console.log(mons.id)
            
            //NOT OK console.log(mons.type)
          })
      }
  }

