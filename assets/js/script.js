var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("hour");
var hourBlock = document.getElementById("time-block");
var taskList = document.querySelector("description");
var tasks = [];

// tasks = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6]
// index of task = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tasks[2] = brush teeth => time = 10am
// tasks[9] = go home => time = 5pm


var todaysDate = moment();
currentDay.textContent = todaysDate.format("LLLL");


var returnTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(returnTasks)

//for loop to iterate over tasks
// for loop you need to input textarea value


$( ".btn" ).click(function() {
    var taskValue = $(this).siblings("textarea").val();
    var taskId = $(this).siblings("textarea").attr('id');
    if (taskId === '8') {
        tasks[0] = taskValue.trim();
    } else if (taskId === '9') {
        tasks[1] = taskValue.trim();
    } else if (taskId === '10'){
        tasks[2] = taskValue.trim();
    } else if (taskId === '11'){
        tasks[3] = taskValue.trim();
    } else if (taskId === '12'){
        tasks[4] = taskValue.trim();
    } else if (taskId === '1'){
        tasks[5] = taskValue.trim();
    } else if (taskId === '2'){
        tasks[6] = taskValue.trim();
    } else if (taskId === '3'){
        tasks[7] = taskValue.trim();
    } else if (taskId === '4'){
        tasks[8] = taskValue.trim();
    } else if (taskId === '5'){
        tasks[9] = taskValue.trim();
    } else if (taskId === '6'){
        tasks[10] = taskValue.trim();
    };
        localStorage.setItem('tasks', JSON.stringify(tasks));
})

