"use strict"

console.log("Hello There")

window.onload =  async function(){
    let response = await fetch("");
    const data = await response.json();
    console.log(data)
}