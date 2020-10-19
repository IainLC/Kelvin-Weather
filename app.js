// Kelvin constant 
const kelvin = "";
//Celsius is 273 degrees less than Kelvin
let celcius = kelvin - 273;
// newton
let newton = celcius * (33/100);
newton = Math.floor(newton);
//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celcius*(9/5)+32;
// When you convert from Celsius to Fahrenheit, you often get a decimal number
fahrenheit = Math.floor(fahrenheit);


//Changed solution to a function so I wouldnt have to keep editing the const value for kelvin.
function temperature(kelvin){
let celcius = kelvin - 273;
let newton = celcius * (33/100);
newton = Math.floor(newton);
let fahrenheit = celcius*(9/5)+32;
fahrenheit = Math.floor(fahrenheit);
  return console.log(`${kelvin} Kelvin is ${celcius}C, ${newton}N and ${fahrenheit}F`)
};

temperature(293);
