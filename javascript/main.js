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
		var numeroCodigoRandom =  	$(".add-js-inputcode").eq(0).val() + $(".add-js-inputcode").eq(1).val() + $(".add-js-inputcode").eq(2).val() + $(".add-js-inputcode").eq(3).val();
		if(numeroCodigoRandom == window.localStorage.getItem("numeroRandom")) {
			return true
		}else{
			alert ("Incorret Code");
			return false;
		}
	});
	
	function saltarCodigo(e) {
		var longitud = $(this).val().length;
		var ascii = e.keyCode;
		if (longitud == 1) {
			$(this).parent().next().children().focus();
		}else if(ascii == 8 {
				 $(this).parent().prev().children().focus();    
	}else{
		alert("Incorret Code");
	}
}
	
	
	
	
});

