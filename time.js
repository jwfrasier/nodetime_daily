const moment = require("moment")
const today = moment().format('MMMM Do YYYY, h:mm:ss a')


function momentDate() {
  return today;
}

function momentDoy() {
  return moment().format('DDDo')
}

function secDay() {
  const minutes = (moment().format('mm') * 60);
  const seconds = (moment().format('ss') * 1);
  const hours = (moment().format('HH') * 3600);
  const total = (seconds + minutes + hours);
  return total;
}

function dls() {
  const yes = "is";
  const no = "is not";
  if (moment().isDST() == true) {
    return yes;
  } else {
    return no;
  };

}

function leapYear() {
  const leap = " is";
  const noLeap = "is not";
  if (moment().isLeapYear() == true) {
    return leap;
  } else {
    return noLeap;
  }

}


module.exports = {
  momentDate: momentDate,
  momentDoy: momentDoy,
  secDay: secDay,
  dls: dls,
  leapYear: leapYear,

}
