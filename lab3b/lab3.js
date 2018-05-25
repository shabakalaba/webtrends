"use strict";
var map;
var coolLocations = [];
var mapMarkers = [];
var Toronto = {
    lat: 43.6532,
    lng: -79.3832
};
var initMapConfig = {
    center: Toronto,
    zoom: 8
};
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    return MapMarker;
}());
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), initMapConfig);
    for (var _i = 0, coolLocations_1 = coolLocations; _i < coolLocations_1.length; _i++) {
        var cl = coolLocations_1[_i];
        var newMapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }
    function getLatLng(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                var something = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                };
                console.log(something);
                return something;
            }
            else {
                setInterval(getLatLng, 1000);
            }
        });
    }
    function addMarker(coord) {
        // will place map marker based on coordinates
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: "A cool place to be"
        });
    }
}
$.ajax({
    url: 'locations.json',
    dataType: 'json',
    success: function (data) {
        // data is an array of objects in this context
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            coolLocations.push(cl);
        }
    }
});
