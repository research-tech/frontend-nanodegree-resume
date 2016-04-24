var speedOfLight = 299792458; //meters/second
var centimetersPerMeter = 100;
var secPerNano = 1.0/1000000000; //seconds

//calculate the speed of light in centimeters/nanosecond:


//first speed light in centimeters per second:
var speedCperS = speedOfLight*centimetersPerMeter;

//then speed light in centimeters/nanosecond:

var speedCperN= speedCperS*secPerNano;

console.log(speedCperN);