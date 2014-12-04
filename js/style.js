var num;
var num1;
var interval = 500;
//retrieves bitcoin high of the day
var rate = function(){ 
$.ajax({
	dataType: 'json',
	url: 'bit.php',
	type: 'GET',
	success: function(data){
		num=parseFloat(data.high).toFixed(2);
		$("#bit").html(num.toString());
		setTimeout(function(){
			rate();
		},interval);
	}
});
};
    rate();
var convert = function(){ 
$.ajax({
	dataType: 'jsonp',
	url: 'http://devel.farebookings.com/api/curconversor/USD/JMD/1/',
	type: 'GET',
	cache: false,
	success: function(data){
		num1=parseFloat(data.JMD).toFixed(2);
		$("#rate").html('$'+num1.toString());
		setTimeout(function(){
			rate();
		},interval);
	}
});
};
   
    convert();

function ch(){
	var mark1=0.01;
	var x = document.getElementById("test1");
	var y = document.getElementById("test2");
	if(x.value =="" || isNaN(x.value)){
		y.value="";
	}else {
		if(document.getElementById("change").value=="btc" && document.getElementById("change2").value=="usd"){
		//var num=parseFloat(document.getElementById("rate").innerHTML);
		//alert(num);
		var b = (parseFloat(x.value)*num).toFixed(2).toString();
		y.value=b;
		}else if(document.getElementById("change").value==document.getElementById("change2").value){
			y.value=x.value;
		}else if(document.getElementById("change").value=="usd" && document.getElementById("change2").value=="jmd"){
		var a = (parseFloat(x.value)*num1).toFixed(2).toString();
		y.value=a;
	}else if(document.getElementById("change").value=="jmd" && document.getElementById("change2").value=="usd"){
		var a = (parseFloat(x.value)*(1/num1)).toFixed(2).toString();
		y.value=a;
	}else if(document.getElementById("change").value=="jmd" && document.getElementById("change2").value=="btc"){
		var a = (parseFloat(x.value)*(1/(num*num1))).toFixed(5).toString();
		y.value=a;
	}else if(document.getElementById("change").value=="btc" && document.getElementById("change2").value=="jmd"){
		var a = (parseFloat(x.value)*(num*num1)).toFixed(2).toString();
		y.value=a;
	}else if(document.getElementById("change").value=="btc" && document.getElementById("change2").value=="usd"){
		var a = (parseFloat(x.value)*(num)).toFixed(2).toString();
		y.value=a;
	}else if(document.getElementById("change").value=="usd" && document.getElementById("change2").value=="btc"){
		var a = (parseFloat(x.value)*(1/num)).toFixed(5).toString();
		y.value=a;
	}
	
	}
}
function ch2(){
	var mark2=0.01;
	var x = document.getElementById("test1");
	var y = document.getElementById("test2");
	if(y.value =="" || isNaN(y.value)){
		x.value="";
	}else {
		if(document.getElementById("change").value=="usd" && document.getElementById("change2").value=="btc"){
		//var num=parseFloat(document.getElementById("rate").innerHTML);
		//alert(num);
		var b = (parseFloat(y.value)*num).toFixed(2).toString();
		x.value=b;
	}else if(document.getElementById("change").value== document.getElementById("change2").value){
			x.value=y.value;
		}else if(document.getElementById("change").value=="jmd" && document.getElementById("change2").value=="usd"){
		var a = (parseFloat(y.value)*num1).toFixed(2).toString();
		x.value=a;
	}else if(document.getElementById("change").value=="usd" && document.getElementById("change2").value=="jmd"){
		var a = (parseFloat(y.value)*(1/num1)).toFixed(2).toString();
		x.value=a;
	}else if(document.getElementById("change").value=="jmd" && document.getElementById("change2").value=="btc"){
		var a = (parseFloat(y.value)*(num*num1)).toFixed(2).toString();
		x.value=a;
	}else if(document.getElementById("change").value=="btc" && document.getElementById("change2").value=="jmd"){
		var a = (parseFloat(y.value)*(1/(num*num1))).toFixed(5).toString();
		x.value=a;
	}else if(document.getElementById("change").value=="usd" && document.getElementById("change2").value=="btc"){
		var a = (parseFloat(y.value)*num).toFixed(2).toString();
		x.value=a;
	}else if(document.getElementById("change").value=="btc" && document.getElementById("change2").value=="usd"){
		var a = (parseFloat(y.value)*(1/num)).toFixed(2).toString();
		x.value=a;
	}
}
}
