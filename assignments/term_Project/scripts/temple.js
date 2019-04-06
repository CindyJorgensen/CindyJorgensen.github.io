
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

templeRequest.onload = function () {
    var templeFile = templeRequest.response;

    //TEMP:
    console.log(templeFile);
    /*
        document.getElementById('templeName').innerHTML = templeFile[0].name;
        document.getElementById('templeAddress').innerHTML = templeFile[0].address + " " + templeFile[0].city + " , " + templeFile[0].state + " " + templeFile[0].zipCode;
    */
    populateTempleWrite(templeFile);
} /* Calls the function that will write all content into the temple page */


function populateTempleWrite(templeFile) {
    var section = document.querySelector('section');

    for (var i = 0; i < templeFile.length; i++) {

        var myArticle = document.createElement('article'); /* New article for each temple */
        var templeName = document.createElement('h2'); /* Temple name will be entered here */
        var templeStreet = document.createElement('p');/* Temple street address will be entered here */
        var templeAddress = document.createElement('p'); /* Temple city, state, zip will be entered here */
        var templePhone = document.createElement('p'); /* Temple phone # will be entered here */
        var templeEmail = document.createElement('p'); /* Temple email address will be entered here */
        var historyListTitle = document.createElement('h3'); /* Title for history */
        var templeHistoryList = document.createElement('ul'); /* Temple history list */
        var serviceListTitle = document.createElement('h3'); /* Title for list */
        var myServicesList = document.createElement('ul');/* Temple services will be entered here */
        var closureListTitle = document.createElement('h3'); /* Title for list */
        var myTempleClosure = document.createElement('ul'); /* Temple closures will be entered here */
        var myTempleImage = document.createElement('img');

        templeName.textContent = templeFile[i].name;
        templeStreet.textContent = templeFile[i].address;
        templeAddress.textContent = templeFile[i].city + " , " + templeFile[i].state + " " + templeFile[i].zipCode;
        templePhone.textContent = templeFile[i].telephone;
        templeEmail.textContent = templeFile[i].email;
        var cityNameID = templeFile[i].cityID;
        historyListTitle.textContent = "History:";
 
        /* This will continue a loop to retrieve all the history for the temple */
        var templeHistory = templeFile[i].history;
        for (var h = 0; h < templeHistory.length; h++) {
            var listItemHistory = document.createElement('li');
            listItemHistory.textContent = templeHistory[h];
            templeHistoryList.appendChild(listItemHistory);
        }
        /* This will continue a loop to retrieve all the services for the temple */
        serviceListTitle.textContent = "Services:";

        var templeService = templeFile[i].services;
        for (var s = 0; s < templeService.length; s++) {
            var listItemService = document.createElement('li');
            listItemService.textContent = templeService[s];
            myServicesList.appendChild(listItemService);
        }

        closureListTitle.textContent = "Temple will be closed:";

        /* This will continue a loop to retrieve all the closures for the temple */
        var templeCloselist = templeFile[i].templeClose;
        for (var c = 0; c < templeCloselist.length; c++) {
            var closureList = document.createElement('li');
            closureList.textContent = templeCloselist[c];
            myTempleClosure.appendChild(closureList);
        }

        if (templeName === 'Anchorage Alaska Temple') {
            myTempleImage.setAttribute("src", "images/Temple_AnchorageAK_200.jpg"), ("alt", "image of the Anchorage Alaska temple ");
        }
        else if (templeName=== 'Boise Idaho Temple') {
            myTempleImage.setAttribute("src", "images/Temple_BoiseID_200.jpg"), ("alt", "image of the Boise Idaho temple ");
        }
        else if (templeName === 'Idaho Falls Idaho Temple') {
            myTempleImage.setAttribute("src", "images/Temple_IdahoFallsID_200.jpg"), ("alt", "image of the Idaho Falls ID temple ");
        }
        else {
            myTempleImage.setAttribute("src", "images/Temple_LaieHI_200.jpg"), ("alt", "image of the Laie Hawaii temple ");

        myArticle.appendChild(templeName);
        myArticle.appendChild(templeStreet);
        myArticle.appendChild(templeAddress);
        myArticle.appendChild(templePhone);
        myArticle.appendChild(templeEmail);
        myArticle.appendChild(historyListTitle)
        myArticle.appendChild(templeHistoryList);
        myArticle.appendChild(serviceListTitle);
        myArticle.appendChild(myServicesList);
        myArticle.appendChild(closureListTitle);
        myArticle.appendChild(myTempleClosure);
        myArticle.appendChild(myTempleImage);

        section.appendChild(myArticle); }
    }
}
