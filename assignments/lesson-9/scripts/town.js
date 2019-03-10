var requesturl = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var townData = request.response;
    townData(towndata);
}


function townData(jsonObj) {
    var townInfo = jsonObj['towns'];
        
    for (var i = 0; i < townInfo.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = townInfo[i].name;
      myPara1.textContent = townInfo[i].motto;
      myPara2.textContent = 'Year Founded: ' + townInfo[i].age;
      myPara3.textContent = 'Population:' + townInfo[i].currentPopulation;
      myPara4.textContect =' Annual Rain Fall: ' + townInfo[i].averageRainfall;
          
      var eventList = townInfo[i].events;
      for (var j = 0; j < eventList.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = eventList[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
}