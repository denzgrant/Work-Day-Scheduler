var timeDiv;
var inputDiv;
var saveBtnDiv;
var userInput;
//Displaying Current Date and Time 
const a = moment().format('MMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = a;


const currentHour = moment().format('H');
console.log(a);
console.log(currentHour);
//Time Slots
const timeSlots = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];
const workHours = [20, 20, 10, 11, 12, 13, 14, 15, 16, 17];


//Timme Blocks 

for (i = 0; i < timeSlots.length; i++) {
    let timeDiv = $("<p>");
    timeDiv.addClass("hour row");
    timeDiv.text(timeSlots[i]);
    $(".float-left").append(timeDiv);
}

for (i = 0; i < timeSlots.length; i++) {
    let inputDiv = `<input type='text' data-hour='${workHours[i]}' class='textarea row' size='90'placeholder=''/>`;
    $(".float-none").append(inputDiv);
}

for (i = 0; i < timeSlots.length; i++) {
    let saveBtnDiv = $("<button class='saveBtn saveBtn:hover'>");
    saveBtnDiv.text("Save");
    $(".float-right").append(saveBtnDiv);

}

$("button").click(function () {
    let userInput = $(".textarea").val();
    localStorage.setItem("User's events", userInput);
    console.log(userInput);
});

function retrieveInput() {
    let userEvents = localStorage.getItem("User's events");
    console.log(userEvents);
    $(".textarea:text").val(userEvents)
    
}

//add a timer 
// setInterval(function () {
$("#shift-hours").each(function () {
    let hour = $(".textarea.row").attr('data-hour')
    console.log(hour);
    console.log(currentHour);
    if ("data-hour" == currentHour) {
    $(".textarea.row").css('background', '#ccffee');
    }

});
// }, 5000)

retrieveInput(); 