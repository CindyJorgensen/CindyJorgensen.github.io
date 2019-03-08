var header = document.querySelector('header');
var section = document.querySelector('section');


var requestURL = 'hawaii.json';

var request = new XMLHttpRequest();
request.open('GET',requestURL); 

request.responseType = 'json';
request.send();

request.onload = function() {
    var hawaiianIsland = request.response;
    populateHeader(hawaiianIsland);
    showHeroes(hawaiianIsland);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['usPacificIslands'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent -  ' Statehood: ' + jsonObj['statehood'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var island = jsonObj['islands'];
        
    for (var i = 0; i < island.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = island[i].name;
      myPara1.textContent = 'Island nickname: ' + island[i].nickname;
      myPara2.textContent = 'Island population: ' + island[i].population;
      myPara3.textContent = 'Highest point on island:' + island[i].highestPoint;
          
      var attractions = island[i].pointsOfInterest;
      for (var j = 0; j < attractions.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = attractions[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }