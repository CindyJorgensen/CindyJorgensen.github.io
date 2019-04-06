
/* -------------------------------------------------- *
 *                                                    *
 *           TEMPLE INFORMATION                       *
 *                                                    *
 * ---------------------------------------------------*/
/* function getTempleInformation() {*/

var templeJSON = 'scripts/JSON/temples.JSON'; 

var templeRequest = new XMLHttpRequest();
templeRequest.open('Get', templeJSON, true);

templeRequest.responseType = 'json';
templeRequest.send();

templeRequest.onload = function() {
    var templeFile = templeRequest.response;

    //TEMP:
    console.log(templeFile);
/*
    document.getElementById('templeName').innerHTML = templeFile[0].name;
    document.getElementById('templeAddress').innerHTML = templeFile[0].address + " " + templeFile[0].city + " , " + templeFile[0].state + " " + templeFile[0].zipCode;
*/
 populateTempleWrite(templeFile);  } /* Calls the function that will write all content into the temple page */


function populateTempleWrite(templeFile) {
    var section = document.querySelector('section');  
        
        for (var i = 0; i < templeFile.length; i++) {

            var myTempleImage1 = document.createElement('img');
            var myTempleImage2 = document.createElement('img');
            var myTempleImage3 = document.createElement('img'); 
            var myTempleImage4 = document.createElement('img');
            

            if ( i === 0) {
                var templeName1 = templeFile[0].name;
                var templeAddress1 = templeFile[0].address;
                var templeAddress1a = templeFile[0].city + " , " + templeFile[0].state + " " + templeFile[0].zipCode;
                var templePhone1 = templeFile[0].telephone;
                var templeZip1 = templeFile[0].zipCode;
                var templeServices1 = templeFile[0].services;
                var templeClosure1 = templeFile[0].closure;
                var templeSchedule1 = templeFile[0].sessionSchedule;

                if (templeName1 === 'Anchorage Alaska Temple') {
                    myTempleImage1.setAttribute("src", "../images/Temple_AnchorageAK_200.jpg"),("alt", "image of the Anchorage Alaska temple ");}
                    else if(templeName1 === 'Boise Idaho Temple') {
                        myTempleImage1.setAttribute("src", "../images/Temple_BoiseID_200.jpg"),("alt", "image of the Boise Idaho temple ");}
                    else if(templeName1 === 'Idaho Falls Idaho Temple') {
                        myTempleImage1.setAttribute("src", "../images/Temple_IdahoFallsID_200.jpg"),("alt", "image of the Idaho Falls ID temple ");}
                    else {
                        myTempleImage1.setAttribute("src", "../images/Temple_LaieHI_200.jpg"),("alt", "image of the Laie Hawaii temple ");}
                    }  
                else if ( i === 1) {
                    var templeName2 = templeFile[1].name;
                    var templeAddress2 = templeFile[1].address;
                    var templeAddress2a = templeFile[1].city + " , " + templeFile[1].state + " " + templeFile[1].zipCode;
                    var templePhone2 = templeFile[1].telephone;
                    var templeZip2 = templeFile[1].zipCode;
                    var templeServices2 = templeFile[1].services;
                    var templeClosure2 = templeFile[1].closure;
                    var templeSchedule2 = templeFile[1].sessionSchedule;
                
                    if (templeName2 === 'Anchorage Alaska Temple') {
                        myTempleImage2.setAttribute("src", "../images/Temple_AnchorageAK_200.jpg"),("alt", "image of the Anchorage Alaska temple ");}
                        else if(templeName2 === 'Boise Idaho Temple') {
                            myTempleImage2.setAttribute("src", "../images/Temple_BoiseID_200.jpg"),("alt", "image of the Boise Idaho temple ");}
                        else if(templeName2 === 'Idaho Falls Idaho Temple') {
                            myTempleImage2.setAttribute("src", "../images/Temple_IdahoFallsID_200.jpg"),("alt", "image of the Idaho Falls ID temple ");}
                        else {
                            myTempleImage2.setAttribute("src", "../images/Temple_LaieHI_200.jpg"),("alt", "image of the Laie Hawaii temple ");}
                        }  
                else if ( i === 2) {
                    var templeName3 = templeFile[2].name;
                    var templeAddress3 = templeFile[2].address;
                    var templeAddress3a = templeFile[2].city + " , " + templeFile[2].state + " " + templeFile[2].zipCode;
                    var templePhone3 = templeFile[2].telephone;
                    var templeZip3 = templeFile[2].zipCode;
                    var templeServices3 = templeFile[2].services;
                    var templeClosure3 = templeFile[2].closure;
                    var templeSchedule3 = templeFile[2].sessionSchedule; 
                    
                    if (templeName3 === 'Anchorage Alaska Temple') {
                        myTempleImage3.setAttribute("src", "../images/Temple_AnchorageAK_200.jpg"),myTempleImage3.setAttribute("alt", "image of the Anchorage Alaska temple ");}
                        else if(templeName3 === 'Boise Idaho Temple') {
                            myTempleImage3.setAttribute("src", "../images/Temple_BoiseID_200.jpg"),myTempleImage3.setAttribute("alt", "image of the Boise Idaho temple ");}
                        else if(templeName3 === 'Idaho Falls Idaho Temple') {
                            myTempleImage3.setAttribute("src", "../images/Temple_IdahoFallsID_200.jpg"),myTempleImage3.setAttribute("alt", "image of the Idaho Falls ID temple ");}
                        else {
                            myTempleImage3.setAttribute("src", "../images/Temple_LaieHI_200.jpg"),myTempleImage3.setAttribute("alt", "image of the Laie Hawaii temple ");}
                    } 
                    else {
                        var templeName4 = templeFile[3].name;
                        var templeAddress4 = templeFile[3].address;
                        var templeAddress4a = templeFile[3].city + " , " + templeFile[3].state + " " + templeFile[3].zipCode;
                        var templePhone4 = templeFile[3].telephone;
                        var templeZip4 = templeFile[3].zipCode;
                        var templeServices4 = templeFile[3].services;
                        var templeClosure4 = templeFile[3].closure;
                        var templeSchedule4 = templeFile[3].sessionSchedule; 

                        if (templeName4 === 'Anchorage Alaska Temple') {
                            myTempleImage3.setAttribute("src", "../images/Temple_AnchorageAK_200.jpg"),("alt", "image of the Anchorage Alaska temple ");}
                            else if(templeName4 === 'Boise Idaho Temple') {
                                myTempleImage4.setAttribute("src", "../images/Temple_BoiseID_200.jpg"),("alt", "image of the Boise Idaho temple ");}
                            else if(templeName4 === 'Idaho Falls Idaho Temple') {
                                myTempleImage4.setAttribute("src", "../images/Temple_IdahoFallsID_200.jpg"),("alt", "image of the Idaho Falls ID temple ");}
                            else {
                                myTempleImage4.setAttribute("src", "../images/Temple_LaieHI_200.jpg"),("alt", "image of the Laie Hawaii temple ");}
                        }

                        document.getElementById('templeName1').innerHTML = templeName1;
                        document.getElementById('templeAddress1').innerHTML = templeAddress1;
                        document.getElementById('templeAddress1a').innerHTML = templeAddress1a;
                        document.getElementById('templeTelephone1').innerHTML = templePhone1;
                        document.getElementById('templeEmail1').innerHTML = templeEmail1;
                        document.getElementById('templeServices1').innerHTML = templeServices1;








                console.log(templeName1);



        /*    populategetWeather(cityZipCode); */
     }
    }

/* ---------------------------------------------------------------------------------------- *
 *                                                                                          *
 *                       CURRENT WEATHER SUMMARY INFORMATION                                *
 *                                                                                          *
 * -----------------------------------------------------------------------------------------*/
function getWeather(cityZipCode) {
    var currentURLweather = 'https://api.openweathermap.org/data/2.5/weather?zip=' + cityZipCode + ',us&appid=c7d023f4cea5310b318c2e583321df8a&units=imperial'; 
    
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
