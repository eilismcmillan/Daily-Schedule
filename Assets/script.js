var saveButton = $(".saveBtn");

var presentDay = dayjs();
$("#currentDay").text(presentDay.format("dddd, MMMM D"));

var hourBlock = function () {
  var currentHour = dayjs().hour();

  //for() {

  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id"));

    console.log(hour);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else if (hour > currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
};

$(".saveBtn").on("click", function () {
  var timeBlock = $(this).closest(".time-block");
  var tasks = timeBlock.find(".description").val();
  var taskList = timeBlock.attr("id");

  localStorage.setItem(taskList, tasks);
  var savedNotice = $("#saved-notice").text("Your task has been saved ✔️");
  savedNotice.show();
  setTimeout(savedNotice.fadeOut(1500));
});

var renderTasks = function () {
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
};

renderTasks();
hourBlock();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: Add ordinal to time
