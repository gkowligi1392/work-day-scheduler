$(".time-block").on("click", "button", function () {
    var hour = $(this).attr("data-hour");
    console.log(hour);
    const descriptionEl = "#text" + hour;
    const description = $(descriptionEl).val();
    console.log("description:", description);
});