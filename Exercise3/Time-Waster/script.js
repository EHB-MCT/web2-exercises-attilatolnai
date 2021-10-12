"use strict"
console.log("Hello")
window.onload =  async function(){
    let response = await fetch("http://www.omdbapi.com/?t=parasite&y=2019&apikey=22d1734a");
    const data = await response.json();
    console.log(data)
    console.log(data.Title)
    console.log(data.Year)
    console.log(data.Director)
    console.log(data.Runtime)
}

