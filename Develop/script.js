var timeDiv;
var inputDiv;
var saveBtnDiv;

var a = moment().format('MMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = a;

//Time Slots
var timeSlots = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM",];


//Timme Blocks 

for (var i = 0; i < timeSlots.length; i++) {
    var timeDiv = $("<p>");
    timeDiv.addClass("hour row description");
    timeDiv.text(timeSlots[i]);
    $(".float-left").append(timeDiv);
}

for (var i = 0; i < timeSlots.length; i++) {
    var inputDiv = $("<input style='width: 620px;' type='text'placeholder=''/>");
    inputDiv.addClass("textarea description row");
    $(".float-none").append(inputDiv);
}

for (var i = 0; i < timeSlots.length; i++) {
    var saveBtnDiv = $("<p>");
    saveBtnDiv.addClass("saveBtn saveBtn i:hover");
    saveBtnDiv.text("save");
    $(".float-right").append(saveBtnDiv);
}