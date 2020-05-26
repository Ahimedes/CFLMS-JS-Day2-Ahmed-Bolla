Math.random();

temperature = Math.floor(Math.random()*26) - 5;

document.write(temperature);

if (temperature < 11) {

	document.write(" It's very cold");

} else if (temperature > 10 && temperature < 16) {

	document.write(" It's kinda cold");

} else if (temperature > 15 && temperature < 21){

	document.write(" The weather is nice today");

} else if (temperature > 20 && temperature <= 25){

	document.write(" It's hot today");

}

