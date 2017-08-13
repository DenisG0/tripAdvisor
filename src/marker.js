const mapboxgl = require("mapbox-gl");

var marker = function(type, coordinates){
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = markerList[type];
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);

}

const markerList = {
  activity : "url(http://i.imgur.com/WbMOfMl.png)",
  hotel:  " http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png"
};

module.exports = marker;
