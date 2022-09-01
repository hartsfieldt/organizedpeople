var tasks = [
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

var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("hour");
var hourBlock = document.getElementById("time-block");
var taskList = document.querySelector("description");

var todaysDate = moment();
currentDay.textContent = todaysDate.format("LLLL");

var timeRow =  $('.hour');
timeRow.each(function (index) {
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

    let taskTime = tasks[index].time;
    let taskText = tasks[index].tasks;
    usersInput.html(taskText);
    console.log(rowHour, taskTime);

})

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

