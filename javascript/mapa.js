$(document).ready(function(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(posicion){
			lat = posicion.coords.latitude;
			lon = posicion.coords.longitude;
			map = new GMaps({
				div: "#mapa",
				lat: lat,
				lng: lon,
				zoom:15,
				mapTypeControl:false,
				zoomControl: false,
				streetViewControl:false
			});
			var geocoder = new google.maps.Geocoder;
			map.addMarker({
				lat: lat,
				lng: lon,
			});
		});
	}
});