let intervalId = 0;
let timeLeft = 15;

$("#saveMessage").hide();

const currentDay = moment();
$("#currentDay").html(currentDay.format("dddd, MMMM Do YYYY"));

validateHour();

$(".time-block").on("click", "button", function () {
    var hour = $(this).attr("data-hour");
    console.log(hour);
    const descriptionEl = "#description" + hour;
    const description = $(descriptionEl).val();
    
    saveStorage(hour, description);
});

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

function saveStorage(name, description) {
    showSaveMessage();
    localStorage.setItem(name, description);
}

//Create a timer Count down
function showSaveMessage() {
    $("#saveMessage").show();
    setTimeout(function () {
        $("#saveMessage").hide();
    }, 2000);
}