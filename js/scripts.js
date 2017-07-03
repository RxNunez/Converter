// Gallons to Liters

var liter = function(gallon){
  return (gallon * 3.785);
};

var gallon= parseInt(prompt("Enter gallons: "));

var result = liter(gallon).toFixed(3);

alert(" The number of liters is " + result +".");

// Grams to ounces
var ounces = function(grams){
  return (grams / 28);
};

var grams= parseInt(prompt("Enter grams: "));

var result = ounces(grams).toFixed(3);

alert(" The number of ounces is " + result +".");

//fluidOunces to milliliter

var fluidOunces = function(milliliter){
  return (milliliter / 30);
};

var milliliter= parseInt(prompt("Enter milliliter: "));

var result = fluidOunces(milliliter).toFixed(3);

alert(" The number of ounces is " + result +".");
