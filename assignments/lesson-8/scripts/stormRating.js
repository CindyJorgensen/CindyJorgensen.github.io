
/* Range selector slider */
function adjustRating(severity) {
    document.getElementById('ratingvalue').innerHTML=severity; }

/* Full name validation error message */
var name = document.getElementById("fullName");

name.addEventListener("input", function (fullName) {
    if (fullName.validity.typeMismatch) {
    fullName.setCustomValidity(" Must be at least 5 characters.");
    } else {
    fullName.setCustomValidity("");   }
    });

