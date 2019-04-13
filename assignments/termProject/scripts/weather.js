/* ---------------------------------------------------------------------------------------- *
 *                                                                                          *
 *                       CURRENT WEATHER SUMMARY INFORMATION                                *
 *                                                                                          *
 * -----------------------------------------------------------------------------------------*/
function getWeather(cityid) {
var currentURLweather = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityid + '&appid=c7d023f4cea5310b318c2e583321df8a&units=imperial'; 

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', currentURLweather, true);

weatherRequest.responseType = 'json';
weatherRequest.send();      

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;

    var sectionAppend = document.querySelector('#templeName');
    /* ---- Key: Values ----
        base: "stations"
        clouds: {all: #}
        coord: {lon: #, lat: # }
        dt: #
        id: #
        main: {temp: #, pressure: #, humidity: #, temp_min: #, temp_max: #}
        name: "cityName"
        sys: {type: #, id: #, message: #, country: "text", sunrise: #, }
        visibility: #
        weather: {id:#, main: "text", description: "text", icon: "##a"}
        wind: {speed: #, deg: #}
        ------------------------------   */

  /* Will input the informaiton onto temple.html Site Page */ 
  var myDiv = document.createElement('article')
  var temperature = document.createElement('div');
  var div2 = document.createElement('div');
  var div3 = document.createElement('div');

  temperature.createTextNode((weatherData.main.temp).toFixed(0) + "&deg; F");
  high.innerHTML = (weatherData.temp_max).toFixed(0) + "&deg; F";
  low.innerHTML = (weatherData.temp_min).toFixed(0) + "&deg; F";
/*
  document.getElementById('temperature').innerHTML = (weatherData.main.temp).toFixed(0) + "&deg; F";
  document.getElementById('low').innerHTML = (weatherData.main.temp_min).toFixed(0) + "&deg; F";
document.getElementById('high').innerHTML = (weatherData.main.temp_max).toFixed(0) + "&deg; F"; */

myDiv.appendChild(temperature);
myDiv.appendChild(high);
myDiv.appendChild(low);

section.appendChild(myDiv);
}
}