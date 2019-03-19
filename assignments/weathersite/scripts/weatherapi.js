
var apiURLstrong = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c7d023f4cea5310b318c2e583321df8a&units=imperial';


var weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', apiURLstrong, true);

weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = weatherRequest.response;

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
        ------------------------------ */

    console.log(weatherData);

    weatherData.main.temp /* This is to get information from json file (using names assign by json) and to get subname - use "." */

  document.getElementById("current-temp").innerHTML = weatherData.main.temp; 

  /* Will input the informaiton onto Preston.html Site Page */
  document.getElementById('temperature').innerHTML = weatherData.main.temp.toFixed(0) + "&deg; F";
  document.getElementById('high').innerHTML = weatherData.main.temp_max.toFixed(0) + "&deg; F";
  document.getElementById('humidity').innerHTML = weatherData.main.humdity.toFixed(0) + " %";
  document.getElementById('windSpeed').innerHTML = weatherData.wind.speed.toFixed(0) + "mph";

}
