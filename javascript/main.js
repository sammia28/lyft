$(document).ready(function(){
	$(".loading").fadeOut(4000);
});

$(document).ready(function (){
	$("#first-number").keyup(function (){
		this.value = (this.value + "").replace(/[^0-9]/g, '');
	});
	$("#envioNumero").click(function () {  
		if($("#first-number").val().length == 9) { 
			window.localStorage.setItem("numeroRandom", parseInt(Math.random() * 10).toString() + parseInt(Math.random().toString() * 10) + parseInt(Math.random() * 10).toString() + parseInt(Math.random() * 10).toString());
			alert(window.localStorage.getItem("numeroRandom"));
			return true;  
		}  
		return false;  
	}); 	
	$("#verifica").click(function(){
		var numeroCodigoRandom =  	$(".inputcode").eq(0).val() + $(".inputcode").eq(1).val() + $(".inputcode").eq(2).val() + $(".inputcode").eq(3).val();
		if(numeroCodigoRandom == window.localStorage.getItem("numeroRandom")) {
			return true
		}else{
			alert ("Codigo incorrecto");
			return false;
		}
	

	})
	
	
	
	
//	almacenar numero en local localStorage

});

