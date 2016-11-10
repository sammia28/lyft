$(document).ready(function(){
	$(".loading").fadeOut(4000);
});

$(document).ready(function (){
	$('#first-number').keyup(function (){
		this.value = (this.value + '').replace(/[^0-9]/g, '');
	});
});