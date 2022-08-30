var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("hour");
var hourBlock = document.getElementById("time-block");
var taskList = document.querySelector("description");
var tasks = [];

var todaysDate = moment();
currentDay.textContent = todaysDate.format("LLLL");


$( ".btn" ).click(function() {
    console.log(this);
    console.log($(this).siblings("textarea"));
    console.log($(this).siblings("textarea").val());
    console.log($(this).siblings("textarea").attr('id'));

    var taskValue = $(this).siblings("textarea").val();
    var taskId = $(this).siblings("textarea").attr('id');
    localStorage.setItem(taskId, taskValue);

    var savedTaskValue = localStorage.getItem(taskValue);
    var savedTaskId = localStorage.getItem(taskId);
    localStorage.getItem(savedTaskValue, savedTaskId, JSON.stringify(taskValue))
  });



