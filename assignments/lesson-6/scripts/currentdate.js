function currentDate() {
    var d = new Date();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("date").innerHTML = n;  }

function toggleMenu() {
        document.getElementById('menuCenter').classList.toggle('hide'); }