
var descriptionBox = $(".description");
var saveButton = $('.saveBtn');


var presentDay = dayjs();
$("#currentDay").text(presentDay.format("dddd, MMMM D"));

var hourBlock = function () {
  var currentHour = dayjs().hour();

  var timeBlock = $('.timeblock')
  var hour = $(this).closest(timeBlock).attr('id')

 if ( hour < currentHour) {
    $(this).closest(descriptionBox).addClass("past");
 } else if ( hour == currentHour) {
    $(this).closest(descriptionBox).addClass("present");
  } else if (hour > currentHour) {
    $(this).closest(descriptionBox).addClass("future");
  }
};
 

$(".saveBtn").on("click", function () {
    var timeBlock = $(this).closest(".time-block") 
  
    var tasks = timeBlock.find(".description").val();
    var taskList = timeBlock.attr('id');
    var savedNotice = $('#saved-notice').text("Your task has been saved!")

     localStorage.setItem(taskList, tasks);
    setTimeout(function() {
       savedNotice.fadeOut();
    },2000);
     setTimeout()
  });

  var renderTasks = function() {
    var tasks = localStorage.getItem("tasks");
    $(this).closest('.description').textContent = tasks
   }

renderTasks()
hourBlock()




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
