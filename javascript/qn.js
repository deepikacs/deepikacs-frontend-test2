debugger
$("#display").hide();
$("button").click(function(){
	if($("#first_name").val()=="" || $("#last_name").val()== "" || $("#e_mail").val()=="" || $("#a_dress").val()== "")
	{
	window.alert("every field should be filled");
	}else{
	debugger
	$("#formValidate").hide();
	$("#display").show();
	var firstname=$("#first_name").val();
	$("#display_first_name").text(firstname);
	}
});