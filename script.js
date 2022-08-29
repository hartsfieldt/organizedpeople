var currentDay = document.getElementById("currentDay");


var todaysDate = moment();
currentDay.textContent = todaysDate.format("LLLL");
