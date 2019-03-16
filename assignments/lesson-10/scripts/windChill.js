var temp = document.getElementById('temperature');
var wSpeed = document.getElementById('windSpeed').nodeValue;

var wChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wSpeed,.16) + 0.4275 * temp * Math.pow(wSpeed,.16)

document.getElementById('windChill').innerHTML = wChill.toFixed(0)+ '&deg;';