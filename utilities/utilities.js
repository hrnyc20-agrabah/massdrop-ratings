// eslint-disable-next-line no-undef
const moment = require('moment');

// formatting item name passed from url to DB format
// i.e. 'sleek-wooden-chicken' will be converted to Sleek Wooden Chicken
const titleize = string => {
  return string
    .toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
// converting time from timestamp to massdrop style (1D - a day ago, 1W - a week ago, etc.)
const timeAgo = timestamp => {
  var momentDate = moment(timestamp);
  var dateTime = {
    minutes: moment().diff(momentDate, 'minutes'),
    hours: moment().diff(momentDate, 'hours'),
    days: moment().diff(momentDate, 'days'),
    weeks: moment().diff(momentDate, 'weeks'),
  };
  var outputTime = '';
  // displaying time ago in minutes
  if (dateTime.minutes >= 1) {
    outputTime = dateTime.minutes + 'M';
  }
  // displaying time ago in hours
  if (dateTime.hours >= 1) {
    outputTime = dateTime.hours + 'H';
  }
  // displaying time ago in days
  if (dateTime.days >= 1) {
    outputTime = dateTime.days + 'D';
  }
  // displaying time ago in weeks
  if (dateTime.weeks >= 1) {
    outputTime = dateTime.weeks + 'W';
  }
  return outputTime;
};
// eslint-disable-next-line no-undef
module.exports = { titleize, timeAgo };

// var test = "2018-08-01T15:56:47.668Z"
// console.log(timeAgo(test))
