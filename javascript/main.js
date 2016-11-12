$(document).ready(function(){
	$(".loading").fadeOut(4000);
});


$(document).ready(function (){
	$("#first-number").keyup(function (){
		this.value = (this.value + "").replace(/[^0-9]/g, '');
		window.localStorage.setItem("numCelular",obtNum);
	});


	$("#envioNumero").click(function () {  
		if($("#first-number").val().length == 9) { 

			window.localStorage.setItem("numeroRandom", parseInt(Math.random() * 10).toString() + parseInt(Math.random().toString() * 10) + parseInt(Math.random() * 10).toString() + parseInt(Math.random() * 10).toString());
			alert(window.localStorage.getItem("numeroRandom"));
			return true;  
		}else{
			return false;
		}

		$("#cel").text("lalal");

	}); 


	$("#envioNumero").click(function(){
		
		$("#cel").text(localStorage.getItem("numCelular"));
		var obtNum = $("#numCelular").val();


	});
 
	$("#celu").text(localStorage.getItem("celular")); 
var obtNum = $("#numeros").val();
		localStorage.setItem("celular", obtNum);





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

		
