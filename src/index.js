
const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNnMCIsImEiOiJjajY4N3dmMjAwZGJzMzNwbGUzYzR3eGd1In0.LAv0u0CjUdnFBRYmjTfNfg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available

});

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-70.009, 40.705]).addTo(map);
