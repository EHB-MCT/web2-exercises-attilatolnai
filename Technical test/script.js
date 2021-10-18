"use strict"

console.log("Hello There")

mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

// window.onload =  async function(){
//     let response = await fetch("");
//     const data = await response.json();
//     console.log(data)
// }
