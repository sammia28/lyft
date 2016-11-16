var cargarPagina = function() {
	$('#buscar').val("");
	$(".button-collapse").sideNav();
  	$(".button-collapse").sideNav({
      	menuWidth: 300,
      	edge: 'left', 
      	closeOnClick: true,
      	draggable: true 
    });
	var nameUser = window.localStorage.getItem("registroName");
	$("#nombreUser").text(nameUser);
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
	$("#buscar").click(buscar);
};

var map,lat,lon;
var funcionExito = function(posicion) {
	lat = posicion.coords.latitude;
	lon = posicion.coords.longitude;
	map = new GMaps({
		div: "#map",
		lat: lat,
		lng: lon,
		zoom:15,
		mapTypeControl:true,
		zoomControl: true,
		streetViewControl:true,
	});
	var geocoder = new google.maps.Geocoder;
	map.addMarker({
		lat: lat,
		lng: lon,
	});
	var content = $("#direccion");
	var dir = "";
	var latlng = new google.maps.LatLng(lat, lon);
	geocoder = new google.maps.Geocoder();
	geocoder.geocode({"latLng": latlng}, function(resultado, estado){
		if (estado == google.maps.GeocoderStatus.OK){
			if (resultado[0]){
				dir = resultado[0].formatted_address;
			}else{
				dir = "No se ha podido obtener ninguna dirección en esas coordenadas.";
			}
		}else{
			dir = "El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + estado;
		}
		window.localStorage.setItem("direccion",dir)
		content.text(window.localStorage.getItem("direccion"));
	});

}
var funcionError = function (error) {
	alert("Tenemos un problema con encontrar tu ubicación");
}
var buscar= function(e){
	e.preventDefault();
	GMaps.geocode({
		address: $('#direccion-cambiar').val(),
		callback: function(results, status) {
			if (status == 'OK') {
				var latlng = results[0].geometry.location;
				map.zoomOut(2);
				map.setCenter(lat,latlng.lng());
				map.addMarker({
					lat: latlng.lat(),
					lng: latlng.lng()
				});
				map.drawRoute({
					origin: [lat,lon],
					destination: [latlng.lat(), latlng.lng()],
					travelMode: 'driving',
					strokeColor: '#DC143C',
					strokeOpacity: 0.8,
					strokeWeight: 8
				});
			}
		}
	});
}
$(document).ready(cargarPagina);



