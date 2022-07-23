$(document).ready(function() {
    var currentDate = moment().format("MMMM Do YYYY");
     var displayDate = document.getElementById("currentDay");
     displayDate.innerHTML = currentDate;
    
});
var dateNow = $('#currentDay');
dateNow.text('currentDate');

var initD = new Date();
var currentHour = initD.getHours();

for (var i = 8; i < 18; i++) {
    if (i < currentHour) {
        document.getElementById(i.toString()).classList.add("past");
    } else if (i === currentHour) {
        document.getElementById(i.toString()).classList.add("present");
    } else if (i > currentHour) {
        document.getElementById(i.toString()).classList.add("future");
    }
}



