var saveButton = $(".saveBtn");

// retrieved the current date from dayjs
var presentDay = dayjs();
$("#currentDay").text(presentDay.format("dddd, MMMM D"));

// function to color-code the time slots
var hourBlock = function () {
  // retrieved current hour
  var currentHour = dayjs().hour();

  // assigned the hour variable to the integer value of each time-block
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id"));

    // conditional statements comparing hour-slot and current hour
    // applies class, and styling, to the relative time-slots
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

// event listener for click event
// saving tasks to storage
$(".saveBtn").on("click", function () {
  // ensured that the relevant timeblock was matched with relevant hour time
  var timeBlock = $(this).closest(".time-block");
  var tasks = timeBlock.find(".description").val();
  var taskList = timeBlock.attr("id");

  // set the task in local storage
  // key for each task was the hour slot they were inputed in
  localStorage.setItem(taskList, tasks);
  // message appears, then fades out each time save button is clicked
  var savedNotice = $("#saved-notice").text("Your task has been saved ✔️");
  savedNotice.show();
  setTimeout(savedNotice.fadeOut(1500));
});

// retrieves all saved items from storage
// renders them onto the correct time slot
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
