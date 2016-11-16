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

	$("#envioNumero").click(function(){  
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
			return true;
		}else{
			alert ("The code is wrong");
			return false;
		}		
	});
	// validar datos

	var expreText =  /^[a-zA-Z0-9._-]/;
	$("#verificaDato").click(function(){
		if($("#name").val().length > 0 || name == expreText.test()){
			var name = $("#name").val();
			var nameUser = window.localStorage.setItem("registroName", name);
			return true;
	    }else{
	       alert("Register your name");
	    	return false;
	    }
	});	
	$("#verificaDato").click(function(){
		if($("#last-name").val().length > 0 || lastName == expreText.test()){
			var lastName = $("#last-name").val();
			var lastNameUser = window.localStorage.setItem("registroLastName", lastName);
			return true;
	    }else{
	       alert("Register your last Name");
	    	return false;
	    }
	});	
	$("#verificaDato").click(function(){
	var emailExpre = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@‌​(?:[^<>()[\].,;:\s@"‌​]+\.)+[^<>()[\]\.,;:‌​\s@"]{2,63}$/i;
		if($("#email").val().length > 0 || email == emailExpre.test()){
			var email = $("#email").val();
			var emailUser = window.localStorage.setItem("registroEmail", email);
			return true;
	    }else{
	       alert("Register a valid email");
	    	return false;
	    }
	});	
	$("#verificaDato").click(function(){
        var condiciones = $("#test5").is(":checked");
        if (!condiciones) {
            alert("Accept the conditions");
            return false;
        }
    });	


});

					