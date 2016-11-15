var cargarPagina = function() {
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapa = $("#mapa");
    mapa.style.height = '250px';
    mapa.style.width = '500px';

    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    var map = new google.maps.Map(mapa, myOptions);
    var marker = new google.maps.Marker({
    	position:latlon,
    	map:map,
    	title:"You are here!"
    });
};

var funcionError = function (error) {
	alert ("error");
};

	$(document).ready(cargarPagina);
		$(".button-collapse").sideNav();
	  	$('.button-collapse').sideNav({
	      	menuWidth: 300,
	      	edge: 'right', 
	      	closeOnClick: true,
	      	draggable: true 
	    });
	var nameUser = window.localStorage.getItem("registroName");
	$("#nombreUser").text(nameUser);