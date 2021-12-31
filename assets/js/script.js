const currentDay = moment();
$("#currentDay").html(currentDay.format("dddd, MMMM Do YYYY"));

validateHour();

$(".time-block").on("click", "button", function () {
    var hour = $(this).attr("data-hour");
    console.log(hour);
    const descriptionEl = "#description" + hour;
    const description = $(descriptionEl).val();
    console.log("description:", description);
});

function validateHour() {
    console.log(currentDay.format("dddd, MMMM Do YYYY ha"));

    $(".form-control").each(function (index) {
        const hourTimeBlock = $(this).attr("aria-label");
        const dateTimeBlock = moment(hourTimeBlock, "ha");

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