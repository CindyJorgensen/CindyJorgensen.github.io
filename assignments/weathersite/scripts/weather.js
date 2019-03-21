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

  /* Will input the informaiton onto Preston.html Site Page */ 
  document.getElementById('low').innerHTML = (weatherData.main.temp_min).toFixed(0) + "&deg; F";
  document.getElementById('temperature').innerHTML = (weatherData.main.temp).toFixed(0) + "&deg; F";
  document.getElementById('high').innerHTML = (weatherData.main.temp_max).toFixed(0) + "&deg; F";
  document.getElementById('humidity').innerHTML = weatherData.main.humidity + " %";
  document.getElementById('windSpeed').innerHTML = (weatherData.wind.speed).toFixed(0) + " mph";


    /*Create windChill information in weatherSiteAPI.js */ 
    var wChill = 35.74 + 0.6215 * (weatherData.main.temp) - 35.75 * Math.pow((weatherData.wind.speed),.16)
     + 0.4275 * (weatherData.main.temp) * Math.pow((weatherData.wind.speed),.16)

    document.getElementById('windChill').innerHTML = wChill.toFixed(0) + '&deg; F';
    get5DayForecast(cityid);
    }
}
/* ---------------------------------------------------------------------------------------- *
 *                                                                                          *
 *                      5 DAY FORECAST REQUEST INFORMATION                                  *
 *                                                                                          *
 * -----------------------------------------------------------------------------------------*/
function get5DayForecast(cityid) {


var forecastURLweather = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityid + '&appid=c7d023f4cea5310b318c2e583321df8a&units=imperial'; 

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', forecastURLweather, true);

forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function() {
    var forecastData = forecastRequest.response;
    populateForecast(forecastData);  }
}

function populateForecast(forecastData) {
    var section = document.querySelector('section');  
     
    /* ---- Key: Values ----
        cod: "#"
        message: #
        cnt: #
        list: [Array - 
            [0 - day 1]
                dt: #
                main: {temp: #, temp_min: #, temp_max: #, pressure: #, sea_level: #, grnd_level: #, humidity: #, temp_kf: # } 
                weather: {id:#, main: "text", description: "text", icon: "##a"}
                clouds: {all: #}
                wind: {speed: #, deg: #}
                sys: pod: "a"
                dt_text: "date_longform"
            
                *** REPEAT ***            
        ------------------------------   */
            
        for (var a = 0; a < forecastData.list.length; a++) {

            var myArticle = document.createElement('article');
            var myDOWeek = document.createElement('h5');
            var myIcon = document.createElement('img');
            var myHigh = document.createElement('p');
            var myLow = document.createElement('p');

            var i; 
            if (a === 0) {
                i=0;
                var low = i + 7;}
                else if (a * 8 <= forecastData.list.length) {
                    i = (a * 8); /* This finds the list array for the first array of each day  - 0,7,14,21,28,35*/
                    var low = i + 7; }            
                else {
                    break;
                }
            var n = new Date(forecastData.list[i].dt_txt);

            var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

            myDOWeek.textContent = weekday[n.getDay()];

            /* This will sort and output an image */
            myIcon.setAttribute("src","http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png"),
            ("alt",(forecastData.list[i].weather[0].description)); 

            myHigh.innerHTML = "High: " + forecastData.list[i].main.temp_max.toFixed(0) + "&deg; F";
            myLow.innerHTML = "Low: " + forecastData.list[i].main.temp_min.toFixed(0) + "&deg; F";
                
                   
            myArticle.appendChild(myDOWeek);
            myArticle.appendChild(myIcon);
            myArticle.appendChild(myHigh);
            myArticle.appendChild(myLow);
        
            section.appendChild(myArticle);
          }
        }