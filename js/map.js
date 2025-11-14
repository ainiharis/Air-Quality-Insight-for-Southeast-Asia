var OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });

var map = L.map('map').setView([10, 111], 5);
var WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=8fe6459393e7075dc0f12eaf7ef7d9c71cfce641";
var WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>';
var waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

map.addLayer(osmLayer).addLayer(waqiLayer);

// Highlight specific countries
var countries = {
    "Brunei Darussalam": [4.5353, 114.7277],
    "Cambodia": [12.5657, 104.9910],
    "Timor-Leste": [-8.8742, 125.7275],
    "Indonesia": [-0.7893, 113.9213],
    "Laos": [19.8563, 102.4955],
    "Malaysia": [4.2105, 101.9758],
    "Myanmar": [21.9162, 95.9560],
    "Philippines": [12.8797, 121.7740],
    "Singapore": [1.3521, 103.8198],
    "Thailand": [15.8700, 100.9925],
    "Vietnam": [14.0583, 108.2772]
};

for (var country in countries) {
    var latlng = countries[country];
    L.marker(latlng).addTo(map)
        .bindPopup("<b>" + country + "</b><br>Air Quality Data");
}


