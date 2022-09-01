let tasks = JSON.parse(localStorage.getItem('tasks'));

if (!tasks) {

tasks = [
    {
        time: 8,
        tasks: [""]
    },
    {
        time: 9,
        tasks: [""]
    },
    {
        time: 10,
        tasks: [""]
    },
    {
        time: 11,
        tasks: [""]
    },
    {
        time: 12,
        tasks: [""]
    },
    {
        time: 13,
        tasks: [""]
    },
    {
        time: 14,
        tasks: [""]
    },
    {
        time: 15,
        tasks: [""]
    },
    {
        time: 16,
        tasks: [""]
    },
    {
        time: 17,
        tasks: [""]
    },
    {
        time: 18,
        tasks: [""]
    },
];
}

var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("hour");
var hourBlock = document.getElementById("time-block");
var taskList = document.querySelector("description");
var dateTime = function () {
    var todaysDate = moment();
    currentDay.textContent = todaysDate.format("LLLL");
}
//for the color coding to work this feature has to live update.
$(document).ready(function () {
    dateTime();
    setInterval(dateTime, 1000)
});

var timeRow =  $('.row');
timeRow.each(function (index) {
    console.log($(this).children());
    var usersInput = $(this).children('textarea');
    let rowHour = $(this).attr('id').split('_')[1];
    console.log($(this).attr('id'))
    if (moment().hours() < rowHour) {
        usersInput.addClass('future')
    }
    else if (moment().hours() == rowHour) {
        usersInput.addClass('present')
    }
    else {
        usersInput.addClass('past')
    }
    // connecting the previously defined task array to the html element.
    let taskText = tasks[index].tasks;
    usersInput.html(taskText);
})
// when I click the save button it stores the items the user inputs.
$( ".btn" ).click(function() {
    console.log($(this))
    var taskValue = $(this).siblings("textarea").val();
    let rowHour = $(this).parent().attr('id').split('_')[1];
    console.log($(this).siblings());
    if (taskValue) {
        tasks.forEach (function(taskObject){
            if (taskObject.time == rowHour){
                taskObject.tasks.push(taskValue);
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
