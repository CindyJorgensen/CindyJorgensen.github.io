console.log('section');
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var townInfo = request.response;
    populateTown(townInfo); 
}

function populateTown(townInfo) {
        
    for (var i = 0; i < townInfo.towns.length; i++) {

      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myList = document.createElement('ul');
      var myImg = document.createElement('img');

      /* ----------------------------------------------------------------
      This will elminate content that we don't want - such as town names 

      'You MUST put in the names or indexes you DON'T want included 
     ------------------------------------------------------------------- */
      if (townInfo.towns[i].name === 'Franklin' || townInfo.towns[i].name === 'Greenville' || townInfo.towns[i].name === 'Placerton' || townInfo.towns[i].name === 'Springfield') {
        continue; }
  
      myH2.textContent = townInfo.towns[i].name;
      myPara1.textContent = townInfo.towns[i].motto;
      myPara2.textContent = 'Year Founded: ' + townInfo.towns[i].yearFounded;
      myPara3.textContent = 'Population: ' + townInfo.towns[i].currentPopulation;
      myPara4.textContect =' Annual Rain Fall: ' + townInfo.towns[i].averageRainfall;
          
    var eventList = townInfo.towns[i].events;
      for (var j = 0; j < eventList.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = eventList[j];
        myList.appendChild(listItem);
      }

      if (townInfo.towns[i].name === 'Preston') {
        myImg.setAttribute("src", "images/HOME_PrestonID.jpg"); }
        else if (townInfo.towns[i].name === 'Soda Springs') {
          myImg.setAttribute("src", "images/HOME_SodaSpringsID.jpg");  }
        else if (townInfo.towns[i].name === 'Fish Haven') {
          myImg.setAttribute("src", "images/Home_FishHavenID.jpg"); }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4); 

      myArticle.appendChild(myList);
      myArticle.appendChild(myImg);

      section.appendChild(myArticle);
    }
}
