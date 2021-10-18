"use strict"

console.log("Hello There")

mapboxgl.accessToken = 'pk.eyJ1IjoidGlsYWRlaHVuIiwiYSI6ImNrdXdhNzczaDBlN2sydW1yYTQwMzM5MHUifQ.n9w_c_FBhfcJOR-QADQcpA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, 
    { enableHighAccuracy: true
})

function successLocation(position){
    console.log(position)
    //console.log(position.coords.longitude)
    //console.log(position.coords.latitude)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    
}

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16
    });
}

// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11'
//     // center: center,
//     // zoom: 20
// });


// window.onload =  async function(){
//     let response = await fetch("");
//     const data = await response.json();
//     console.log(data)
// }
