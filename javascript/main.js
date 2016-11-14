$(document).ready(function(){
	$(".loading").fadeOut(4000);
});

$(document).ready(function (){

	var numeroIngresado = window.localStorage.getItem("numCelular");
	var generaNunRandom = window.localStorage.getItem("numeroRandom");


	$("#first-number").keyup(function (){
		var numCelIngresado = $("#first-number").val();
		this.value = (this.value + "").replace(/[^0-9]/g, '');
		window.localStorage.setItem("numCelular", numCelIngresado);
	});

	$("#envioNumero").click(function() {  
		if($("#first-number").val().length == 9){ 
			var codigoRandom = Math.floor(Math.random()*9000)+900;
			var numeroRandom = window.localStorage.setItem("numeroRandom", codigoRandom);
			alert(generaNunRandom);
			return true;  
		}else{
			alert("The number is wrong");
			return false;
		}
	}); 

	$("#cel").text(numeroIngresado);
	$("#newCode").click(function(){
		alert(generaNunRandom);
	});
	
	$("#verifica").click(function(){
		var numeroCodigo = $(".add-js-inputcode").eq(0).val() + $(".add-js-inputcode").eq(1).val() + $(".add-js-inputcode").eq(2).val() + $(".add-js-inputcode").eq(3).val();
		if(numeroCodigo == generaNunRandom) {
			return true
		}else{
			alert ("The code is wrong");
			return false;
		}		
	});

});

					


		
