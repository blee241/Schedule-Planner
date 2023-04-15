//Adds the current date as text in the header
var currentDayEl = $('#currentDay');
currentDayEl.text(dayjs().format('dddd, MMMM D'));


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

//Changes the color of the time blocks based on what time it currently is
function changeBlockColors() {
  for (var i = 0; i < 9; i++) { //For each of the 9 hour blocks
    var startingHour = 9;
    var blockHour = startingHour + i;
    var hourAdjustment = 0;
    if (i >= 4) { //If i >= 4, then that means the time block is 1pm or later and 12 needs to be subtracted from blockHour to access the correct div id in lines 40 and 42
      hourAdjustment = 12;
    }
    if (dayjs().format('H') < blockHour) { //If the current hour on a 24-hour clock is less than the hour on the block
      //Then leave the block to be its default color of green
    } else 
    if (dayjs().format('H') == blockHour) { //If the current hour on a 24-hour clock is equal to the hour on the block
      $('#hour-' + (blockHour - hourAdjustment)).attr('class', 'row time-block present') //Then change the block color to red
    } else {
      $('#hour-' + (blockHour - hourAdjustment)).attr('class', 'row time-block past') //Else change the block to gray
    }
  }
}

//Calls the function to change block colors and then sets an interval to update the colors every minute
changeBlockColors();
setInterval(changeBlockColors, 60000);

//Saves text to local storage
function saveToLocal(event) {
  localStorage.setItem(this.parentElement.getAttribute('id'), this.parentElement.children[1].value)
}

//Creating event listeners for each save button
var hour9SaveEl = $('#hour-9-save');
var hour10SaveEl = $('#hour-10-save');
var hour11SaveEl = $('#hour-11-save');
var hour12SaveEl = $('#hour-12-save');
var hour1SaveEl = $('#hour-1-save');
var hour2SaveEl = $('#hour-2-save');
var hour3SaveEl = $('#hour-3-save');
var hour4SaveEl = $('#hour-4-save');
var hour5SaveEl = $('#hour-5-save');
hour9SaveEl.on('click', saveToLocal);
hour10SaveEl.on('click', saveToLocal);
hour11SaveEl.on('click', saveToLocal);
hour12SaveEl.on('click', saveToLocal);
hour1SaveEl.on('click', saveToLocal);
hour2SaveEl.on('click', saveToLocal);
hour3SaveEl.on('click', saveToLocal);
hour4SaveEl.on('click', saveToLocal);
hour5SaveEl.on('click', saveToLocal);

for (var i = 0; i < 9; i++) {
  var hour = 9;
  hour += i; //hour represents the 24-hour value of the time block
  if (i >= 4) { 
   hour -= 12; //This subtracts 12 from hour if the hour block is 1pm or later so that the appropriate hour id can be accessed
  }
  $('#hour-' + hour).children('textarea').text(localStorage.getItem('hour-' + hour))
}
//Sets the textarea element text to xxxxx
// $('#hour-' + hour).children('textarea').text( xxxxx )

//Accesses the stored values in the local storage
// localStorage.getItem('hour-' + hour)


