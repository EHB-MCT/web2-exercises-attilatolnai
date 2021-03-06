"use strict"

import Team from "./team.js";

console.log("Gotta catch em all");

let list = [];
let pokemon = [];

let team1 = new Team();

function getData(){
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    //console.log(data.results)
    list = data.results;
    //For loop => loop over the list to get the data for every pokemon
    for(let element of list){
      fetch(element.url).then(response => {
        return response.json();
      }).then(data => {
        pokemon.push(data);
      })
    }
  });
}

  window.onload = function(){

      getData();
      setTimeout(buildList, 1500);

      function buildList(){
          console.log(pokemon);
          let html = '';
          pokemon.sort(function(a,b){
            return a.id - b.id;
          });

          for(let p of pokemon){
            html += `<div class="card">
            <img class="card-img-top" src="${p.sprites.front_default}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">types TBD</p>
            <a href="#" id="${p.id}" class="btn btn-primary ">Add to team</a>
            </div>
            </div>`
          }
          document.getElementById('list').innerHTML = html;

          document.querySelectorAll('.btn').forEach(item => {
            item.addEventListener('click', event => {
                let id = event.target.id;
                let p = pokemon.find(ele => ele.id == id);
                let message = team1.addPokemon(p);
                refreshTeam(message);
            });
        });
      }
      refreshTeam();
  }

  function refreshTeam(m){
    document.getElementById('team').innerHTML = team1.describe();

    if(m){
      let alertbox = document.createElement('div');
      alertbox.classList.add('alert');
      alertbox.setAttribute('role', 'alert');

      if(m.type == 'SUCCES'){
        alertbox.classList.add('alert-succes');
      }else{
        alertbox.classList.add('alert-danger');
      }
      alertbox.innerText = m.value;

      document.getElementById('messages').innerHTML = '';
      document.getElementById('messages').appendChild(alertbox);
    }
  }

