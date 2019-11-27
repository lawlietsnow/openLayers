var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-74.006,40.712]), // Coordinates of New York
          zoom: 5 //Initial Zoom Level
        })
});


var marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-74.006,40.7127])
  ),  // Cordinates of New York's Town Hall
});
var marker2 = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([0,0])
  ), 
});
var vectorSource = new ol.source.Vector({
  features: [marker,marker2]
});
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(markerVectorLayer);

marker.getGeometry().translate(1000,0);

console.log(marker.getGeometry());