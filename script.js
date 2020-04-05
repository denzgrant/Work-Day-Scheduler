let timeDiv;
let inputDiv;
let saveBtnDiv;

//Displaying Current Date and Time 
const a = moment().format('MMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = a;


const currentHour = moment().format('H');

//Time Slots
const timeSlots = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",];
const workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

//Timme Blocks 
for (i = 0; i < timeSlots.length; i++) {
    let timeDiv = $("<p>");
    timeDiv.addClass("hour row");
    timeDiv.text(timeSlots[i]);
    $(".float-left").append(timeDiv);
}

for (i = 0; i < timeSlots.length; i++) {
    let inputDiv = $(`<input type='text' data-hour='${workHours[i]}' class='textarea row ${workHours[i]}' size='90'placeholder=''/>`);
    $(".float-none").append(inputDiv);

    if (workHours[i] == currentHour) {
        $(inputDiv).css('background', '#ccffee');
    } else if (workHours[i] > currentHour) {
        $(inputDiv).css('background', '#42f55a');
    }
}
    //Retrieving Data
    let userKey8 = localStorage.getItem("key8");
    $(".textarea.row.8").val(userKey8)

    let userKey9 = localStorage.getItem("key9");
    $(".textarea.row.9").val(userKey9)

    let userKey10 = localStorage.getItem("key10");
    $(".textarea.row.10").val(userKey10)

    let userKey11 = localStorage.getItem("key11");
    $(".textarea.row.11").val(userKey11)

    let userKey12 = localStorage.getItem("key12");
    $(".textarea.row.12").val(userKey12)

    let userKey13 = localStorage.getItem("key13");
    $(".textarea.row.13").val(userKey13)

    let userKey14 = localStorage.getItem("key14");
    $(".textarea.row.14").val(userKey14)

    let userKey15 = localStorage.getItem("key15");
    $(".textarea.row.15").val(userKey15)

    let userKey16 = localStorage.getItem("key16");
    $(".textarea.row.16").val(userKey16)

    let userKey17 = localStorage.getItem("key17");
    $(".textarea.row.17").val(userKey17)

    
//Save Button Creation 
for (i = 0; i < timeSlots.length; i++) {
    let saveBtnDiv = $("<button class='saveBtn saveBtn:hover'>");
    saveBtnDiv.text("Save");
    $(".float-right").append(saveBtnDiv);

};
//Storing information from a click of a button 
$("button").click(function () {
    function storeValue(row, key) {
        let userInput = $(row).val(); //".textarea.row.9"
        localStorage.setItem(key, userInput);
    }
    storeValue(".textarea.row.8", "key8")
    storeValue(".textarea.row.9", "key9");
    storeValue(".textarea.row.10", "key10");
    storeValue(".textarea.row.11", "key11");
    storeValue(".textarea.row.12", "key12");
    storeValue(".textarea.row.13", "key13");
    storeValue(".textarea.row.14", "key14");
    storeValue(".textarea.row.15", "key15");
    storeValue(".textarea.row.16", "key16");
    storeValue(".textarea.row.17", "key17");
});