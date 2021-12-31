// Hide save message
$("#saveMessage").hide();

// Create the current date from moment.js
const currentDay = moment();

// show the current day
$("#currentDay").html(currentDay.format("dddd, MMMM Do YYYY"));

// validate each hour format
validateHour();

// handle click event for buttons in timeblocks
$(".time-block").on("click", "button", function () {
    var hour = $(this).attr("data-hour");
    console.log(hour);
    const descriptionEl = "#description" + hour;
    const description = $(descriptionEl).val();
    
    saveStorage(hour, description);
});

// validate if hour is in the past, present, or future, and assign value from local storage
function validateHour() {
    console.log(currentDay.format("dddd, MMMM Do YYYY ha"));

    $(".form-control").each(function (index) {
        const hourTimeBlock = $(this).attr("aria-label");
        const dateTimeBlock = moment(hourTimeBlock, "ha");
        const description = localStorage.getItem(hourTimeBlock);

        $(this).val(description);

        if (!currentDay.isBefore(dateTimeBlock, "hour")) {
        if (currentDay.isSame(dateTimeBlock, "hour")) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
        } else if (!currentDay.isAfter(dateTimeBlock, "hour")) {
        $(this).addClass("future");
        }
    });
}

// save the description to local storage
function saveStorage(name, description) {
    showSaveMessage();
    localStorage.setItem(name, description);
}

//Create a timeout to show and hide the save message
function showSaveMessage() {
    $("#saveMessage").show();
    setTimeout(function () {
        $("#saveMessage").hide();
    }, 2000);
}