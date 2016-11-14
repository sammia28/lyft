$(document).ready(function(){
	$(".loading").fadeOut(4000);
});

$(document).ready(function (){

	var obtNumCel = $("#first-number").val();
	$("#first-number").keyup(function (){
		this.value = (this.value + "").replace(/[^0-9]/g, '');
		window.localStorage.setItem("numCelular", obtNumCel);
	});
	$("#envioNumero").click(function() {  
		if($("#first-number").val().length == 9) { 

			var codigoRandom = parseInt(Math.random() * 10).toString() + parseInt(Math.random().toString() * 10) + parseInt(Math.random() * 10).toString() + parseInt(Math.random() * 10).toString()

			window.localStorage.setItem("numeroRandom", codigoRandom );
			alert(window.localStorage.getItem("numeroRandom"));
			return true;  
			$("#cel").text(localStorage.getItem("numCelular")); 
		}else{
			alert("Incorret number");
			return false;
		}
	}); 





	$("#verifica").click(function(){
		var numeroCodigoRandom = $(".add-js-inputcode").eq(0).val() + $(".add-js-inputcode").eq(1).val() + $(".add-js-inputcode").eq(2).val() + $(".add-js-inputcode").eq(3).val();
		if(numeroCodigoRandom == window.localStorage.getItem("numeroRandom")) {
			return true
		}else{
			alert ("Incorret Code");
			return false;
		}		
	});
});

/*	almacenar numero*/
					/*
		$("#dig1").focus(function(){
			$(".add-js-inputcode").keyup(cambiaInput);
			var cambiaInput = function(e){
				if($(e.target).val().length == 1){
					$(e.target).parent().next().focus();
				}
				if(e.keyCode == 8) {
					$(e.target).parent().prev().focus();
				}
			}
		});
*/

		
