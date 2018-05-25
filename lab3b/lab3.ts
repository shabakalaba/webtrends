let map : any;
let coolLocations : any[] = [];
let mapMarkers : MapMarker[] = [];

interface LatLng{
    lat : number,
    lng : number
}

interface GoogleMapsConfig {
    center: LatLng,
    zoom: number
}


let Toronto : LatLng = {
    lat : 43.6532,
    lng: -79.3832
}

let initMapConfig = { 
    center: Toronto, 
    zoom: 8
}

class MapMarker {
    Address : string;
    Coordinates : LatLng;
    public constructor(address:string){
        this.Address = address;
    }
}

function initMap(){
    map = new google.maps.Map(
        document.getElementById("map"), initMapConfig
    );

    for(let cl of coolLocations) {
        let newMapMarker : MapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }

    function getLatLng(address : string) : LatLng{

        let geocoder : object = new google.maps.Geocoder();

        geocoder.geocode({ 'address': address }, function(results, status){
            if (status === 'OK') {
                var something = {
                    lat:results[0].geometry.location.lat(), 
                    lng:results[0].geometry.location.lng() 
                }
                console.log(something);
                return something;
            } else {
                setInterval(getLatLng, 1000);
            }
        });
    }

    function addMarker(coord : LatLng) : void{
        // will place map marker based on coordinates
        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: `A cool place to be`
        });
    }
}

$.ajax({
    url: 'locations.json',
    dataType: 'json',
    success: function(data){
        // data is an array of objects in this context

        for(let cl of data){
            coolLocations.push(cl);
        }
    }
});