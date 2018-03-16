$(document).ready(function(){
$("#afsh").hide();
$("button").click(function(){
if($("#email").val()=="" || $("#fname").val()== "" || $("#lname").val()=="" || $("adress").val()== "")
	{
	window.alert("every field should be filled");
	}else{
		debugger;
		$("#fsh").hide();
		$("#afsh").show();
		var email1=$("#email").val();
		$("#eid").text(email1);
	
		var firstname=$("#fname").val();
		$("#fid").text(firstname);
	
		var lastname=$("#lname").val();
		$("#lid").text(lastname);
	
		var adress=$("#adress").val();
		$("#aid").text(adress);
	
	}
});
});