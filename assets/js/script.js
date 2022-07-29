//displaying the time to the header
var day = document.querySelector("#currentDay");
day.textContent = moment().format("dddd, MMMM Do");
console.log(day);

//on save click
    //save context locally
var saveEl = document.querySelector('.fa');
var bodyEl = document.querySelector('tbody');
var schedule = {
    9: "rt",
    10: "",
    11: "",
    12: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
}
bodyEl.addEventListener("click", function(event) {
    var click = event.target;
    var time = click.getAttribute('value');

        if (click.classList.contains('fa')) {
        schedule[time] = click.parentElement.parentElement.children[2].input;
        window.localStorage.setItem('schedule', JSON.stringify(schedule));
        console.log(schedule);
        }
});
    
// on opening page
//     load all saved data to hourslots
function loadSchedule() {
    schedule = localStorage.getItem('schedule', JSON.parse());
    console.log(schedule)
    for (i = 0; i < schedule.length; i++) {
       bodyEl.children[i].children[2] = schedule[i];
    }
}

//show each hour color coded based on past, present, future
    //compare hour slot to current hour using moment
function changeColors(){
    for (i = 0; i < 9; i++) {
        var hour = moment().format('H');
        var colorSpace =document.querySelector('tbody').children[i].children[2];
        if (hour - 9 > i) {
            colorSpace.setAttribute('class', 'past');
        } else if (hour - 9 == i) {
            colorSpace.setAttribute('class', 'present');
        } else {
            colorSpace.setAttribute('class', 'future');
        }
        console.log(hour);
    }
}
changeColors();
loadSchedule();