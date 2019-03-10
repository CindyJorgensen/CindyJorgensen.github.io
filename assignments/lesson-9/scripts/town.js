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
!
      if (townInfo.towns[i].name === 'Preston' || i === 'Soda Springs' || i === 'Fish Haven') {
        continue; }

      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myList = document.createElement('ul');
      var MyImg = document.createElement('img');


  
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
/*
      if (townInfo.towns[i].name === 'Preston') {
        img.setAttribute("src", "../images/w(3457072585_53e5a224c5_z.jpg"); }
        else if (townInfo.towns[i].name === 'Soda Springs') {
          img.setAttribute("src", "../images/w9_6888602099_33b415dfa7_z.jpg");  }
        else if (townInfo.towns[i].name === 'Fish Haven') {
          img.setAttribute("src", "../images/w9_15476663331_df4981e838_z.jpg"); } */
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4); 

      myArticle.appendChild(myList);
/*      myArticle.appendChild(MyImg); */

      section.appendChild(myArticle);
    }
}
