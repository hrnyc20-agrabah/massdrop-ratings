const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// eslint-disable-next-line consistent-return
const db = new sqlite3.Database((path.join(__dirname, './reviews.db')), (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    return console.log('Error connecting to DB - DB', error.message);
  }
  // eslint-disable-next-line no-console
  console.log('Connected to the SQLite database Reviews');
});

module.exports = db;
