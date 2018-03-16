$(document).ready(function(){
$("#afsh").hide();
$("button").click(function(){
if($("#eid").val()=="" || $("#fid").val()== "" || $("#lid").val()=="" || $("aid").val()== "")
	{
	window.alert("every field should be filled");
	}else{