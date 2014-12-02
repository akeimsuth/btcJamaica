var num;
var num1;
var interval = 500;
var rate = function(){ 
$.ajax({
	dataType: 'json',
	url: 'http://api.coindesk.com/v1/bpi/currentprice/CNY.json',
	type: 'GET',
	cache: false,
	success: function(data){
		num=parseFloat(data['bpi']['USD']['rate']).toFixed(2);
		//$("#rate").html(num.toString());
		setTimeout(function(){
			rate();
		},interval);
	}
});
};
    rate();
var convert = function(){ 
$.ajax({
	dataType: 'json',
	url: 'https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBEX3_M_JMD_USD_CA_AB_A01.json',
	type: 'GET',
	cache: false,
	success: function(data){
		num1=parseFloat(data['data'][0][1]).toFixed(2);
		$("#rate").html(num1.toString());
		setTimeout(function(){
			rate();
		},interval);
	}
});
};
   
    convert();

function ch(){
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
		var a = (parseFloat(x.value)*(1/(num*num1))).toFixed(2).toString();
		y.value=a;
	}else if(document.getElementById("change").value=="btc" && document.getElementById("change2").value=="jmd"){
		var a = (parseFloat(x.value)*(num*num1)).toFixed(2).toString();
		y.value=a;
	}
	
	}
}
function ch2(){
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
		var a = (parseFloat(y.value)*(1/(num*num1))).toFixed(2).toString();
		x.value=a;
	}
}
}
