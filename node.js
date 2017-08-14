const moment = require("moment");
const chalk = require("chalk");
const time = require("./time");
const log = console.log;

log(("It is ") + chalk.blue(time.momentDate()));

log(("It is ") + chalk.magenta(time.momentDoy()) + " of the year");

log(("It is ") + chalk.cyan(time.secDay()) + " seconds into the day.");

log(("It ") + chalk.green(time.dls()) + " Daylight Savings Time.");

log(("It ") + chalk.red(time.leapYear()) + (" a Leap Year"));
