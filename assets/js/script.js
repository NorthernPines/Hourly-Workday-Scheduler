//displaying the time to the header
var day = document.querySelector("#currentDay");
day.textContent = moment().format("dddd, MMMM Do");
console.log(day);

//on save click
    //save context locally
var bodyEl = document.querySelector('.table').children[0];
bodyEl.addEventListener("click", function(event) {
    var click = event.target;
    
    if (click.contains('fa') === true) {
        console.log("hi");
    }
});
    
//on opening page
    //load all saved data to hourslots

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