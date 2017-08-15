const moment = require("moment")
const today = moment().format('MMMM Do YYYY, h:mm:ss a')

// Todays date.
function momentDate() {
  return today;
}
// The exact number of the day in this current year
function momentDoy() {
  return moment().format('DDDo')
}
// Seconds in the day function
function secDay() {
  const minutes = (moment().format('mm') * 60);
  const seconds = (moment().format('ss') * 1);
  const hours = (moment().format('HH') * 3600);
  const total = (seconds + minutes + hours);
  return total;
}

// Daylight savings function
function dls() {
  const yes = "is";
  const no = "is not";
  if (moment().isDST() == true) {
    return yes;
  } else {
    return no;
  };

}
// Leap year function
function leapYear() {
  const leap = " is";
  const noLeap = "is not";
  if (moment().isLeapYear() == true) {
    return leap;
  } else {
    return noLeap;
  }

}

// Export the modules to be used
module.exports = {
  momentDate: momentDate,
  momentDoy: momentDoy,
  secDay: secDay,
  dls: dls,
  leapYear: leapYear,
}
