const timeAgo = require('moment')
const titleize = (string) => {
  return string
    .toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const time = (string) => {

}


var testString = "Thu Feb 07 2019 11: 00: 04 GMT-0500 (EST)"

module.exports = {
  titleize
}
