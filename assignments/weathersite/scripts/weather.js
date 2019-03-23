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
    get5DayForecast(cityid); /* Calls the next function - get5DayForecast(cityid) -->  */
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
    populateForecast(forecastData);  } /* Calls the function that will write all content into the city pages */
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


            /**************************************************
             *   Gets the day of week for the 5 day forecast  *
             **************************************************/

            var i = a;  /* This was not necessary EXCEPT, I didn't want to rewrite and change the variable therefore assigned that the varibable a = i; because I could have potential missed a variable.*/

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
            myIcon.setAttribute("src","https://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png"),
            ("alt",(forecastData.list[i].weather[0].description)); 


            var highTempTime = /[0-9 :]21:00:00/        /* Sets the time for 9:00 pm; the highest temperature for the day */
            var x = i-1;
            do {    /* will run through the statement until it finds that the condition is met */
              x++;
            }
            while (!highTempTime.test(forecastData.list[x].dt_txt)); /* The condition: must meet the time of 9:00pm */
            var highTemp = x;  /* This sets the variable for the high temperature, without comparising the others */
          
            myHigh.innerHTML = "High: " + forecastData.list[highTemp].main.temp_max.toFixed(0) + "&deg; F"; /* Writes the content */

            var lowTempTime = /[0-9 :]09:00:00/  /* This expression sets the low temperature the same way as the high */
            var l = i-1;
            do {
              l++;
            }
            while (!lowTempTime.test(forecastData.list[l].dt_txt));
             
            var lowTemp = l;
            myLow.innerHTML = "Low: " + forecastData.list[lowTemp].main.temp_min.toFixed(0) + "&deg; F";
            
            if (x > l) { a = x;}  /* This changes the beginning count to exclude all numbers prior to ensure NO duplication */
                else {a = l;}
                   
            myArticle.appendChild(myDOWeek);
            myArticle.appendChild(myIcon);
            myArticle.appendChild(myHigh);
            myArticle.appendChild(myLow);
        
            section.appendChild(myArticle);
          }
        }