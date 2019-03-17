// CURRENT WEATHER SUMMARY INFORMATION

var currentURLweather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c7d023f4cea5310b318c2e583321df8a&units=imperial'; 

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

  console.log(weatherData);

  /* Will input the informaiton onto Preston.html Site Page */ 
  document.getElementById('low').innerHTML = (weatherData.main.temp_min).toFixed(0) + "&deg; F";
  document.getElementById('temperature').innerHTML = (weatherData.main.temp).toFixed(0) + "&deg; F";
  document.getElementById('high').innerHTML = (weatherData.main.temp_max).toFixed(0) + "&deg; F";
  document.getElementById('humidity').innerHTML = weatherData.main.humidity + " %";
  document.getElementById('windSpeed').innerHTML = (weatherData.wind.speed).toFixed(0) + " mph";


    /*Create windChill information in weatherSiteAPI.js */ 
    var wChill = 35.74 + 0.6215 * (weatherData.main.temp) - 35.75 * Math.pow((weatherData.wind.speed),.16) + 0.4275 * (weatherData.main.temp) * Math.pow((weatherData.wind.speed),.16)

    document.getElementById('windChill').innerHTML = wChill.toFixed(0) + '&deg; F';

}




// 5 DAY FORECAST REQUEST INFORMATION 

console.log('section');
var section = document.querySelector('section');


var forecastURLweather = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c7d023f4cea5310b318c2e583321df8a&units=imperial'; 

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', forecastURLweather, true);

forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function() {
    var forecastData = forecastRequest.response;
    populateForecast(forecastData);  }

function populateForecast(forecastData) {
    
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
            var myDOWeek = document.createElement('p');
            var myIcon = document.createElement('img');
            var myHigh = document.createElement('p');
            var myLow = document.createElement('p');

            var i 
            if (a < 1) {
                    i = 6; }
                else {
                 i = (a * 7); } /* This finds the list array for the first array of each day  - 0,7,14,21,28,35*/            
           
    /*        var obj = JSON.parse(date, function(key, value) {
                if (key == 'dt_txt') {
                    return new Date(value); }
                else {
                    return value;   } 
                } ); 

            console.log(obj.dt_txt);*/

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
            if (forecastData.list[i].weather[0].main === "Clear") {
                myIcon.setAttribute("src","images/sunny_sivvus_weather_symbols.png"),
                myIcon.setAttribute("alt","sun"); }
                else if (forecastData.list[i].weather[0].main === "Clouds"){myIcon.setAttribute("src", "images/cloudy_sivvus_weather_symbols.png"),
                myIcon.setAttribute("alt","cloud image"); }
                else if (forecastData.list[i].weather[0].main === "Rain") {myIcon.setAttribute("src","images/raining_sivvus_weather_symbols.png"),
                myIcon.setAttribute("alt","cloud with rain"); }
                else if (forecastData.list[i].weather[0].main === "Snow") {myIcon.setAttribute('src', "images/snowy_sivvus_weather_symbols.png"),
                myIcon.setAttribute("alt","cloud with snowflake image");  }
                else if (forecastData.list[i].weather[0].main === "Drizzle") {myIcon.setAttribute('src', 'images/raining_sivvus_weather_symbols.png'),
                myIcon.setAttribute("alt","rain cloud image"); }
                else {myIcon.textContent = forecastData.list[i].weather[0].main; }


            myHigh.textContent = "High: " + ((forecastData.list[i].main.temp_max).toFixed(0)) + ' &deg; F';
            myLow.textContent = "Low: " + ((forecastData.list[i].main.temp_min).toFixed(0)) + ' &deg; F';
                
                   
            myArticle.appendChild(myDOWeek);
            myArticle.appendChild(myIcon);
            myArticle.appendChild(myHigh);
            myArticle.appendChild(myLow);
        
            section.appendChild(myArticle);
          }
        }