// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('map').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
// This method is useful when we need to add multiple tile layers, or a background image of our map(s), which we will do later in this module.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);