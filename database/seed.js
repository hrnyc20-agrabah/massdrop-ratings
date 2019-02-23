/* eslint-disable no-console */
/* eslint-disable no-undef */
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const faker = require('faker');

// eslint-disable-next-line consistent-return
const db = new sqlite3.Database(path.join(__dirname, './reviews.db'), error => {
  if (error) {
    // eslint-disable-next-line no-console
    return console.log('Error connecting to DB - DB', error.message);
  }
  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-undef
  console.log('Connected to the SQLite database Reviews');
});

db.serialize(() => {
  // generating 100 items
  const insertItems = db.prepare('INSERT INTO items VALUES(?, ?)');
  for (let i = 1; i < 101; i++) {
    insertItems.run(i, faker.commerce.productName());
  }
  insertItems.finalize();

  // generating 500 users
  const insertUsers = db.prepare(
    'INSERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?)',
  );
  for (let u = 1; u < 501; u++) {
    insertUsers.run(
      u, // user id
      faker.image.avatar(), // user avatar
      faker.internet.userName(), // usernamer
      faker.random.number({
        min: 0,
        max: 150,
      }), // number of likes
      faker.random.number({
        min: 0,
        max: 1,
      }), // isVerified 0 (false):1 (true)
      0, // isHidden default value 0, can be hidden by user interaction on FE
      0 /*
          isDeleted default value 0, can be set to 1
          (marking user soft-deleted, if user cancels his/hers account,
          but we still want to show reviews/comments)
        */,
    );
  }
  insertUsers.finalize();

  const insertReviews = db.prepare(
    'INSERT INTO reviews VALUES(?, ?, ?, ?, ?, ?, ?)',
  );
  // generating 500 reviews
  for (let r = 1; r < 501; r++) {
    insertReviews.run(
      r, // 1 review.id,
      faker.date.between('2018-05-01', '2019-02-20')x, // 2 review.date,
      faker.random.number({
        min: 1,
        max: 500,
      }), // 3 review.author_id,
      faker.lorem.sentences(), // 4 review.body,
      faker.random.number({
        min: 0,
        max: 5,
      }), // 5 review.rating,
      faker.random.number({
        min: 1,
        max: 100,
      }), // 6 review.item_id,
      faker.random.number({
        min: 0,
        max: 250,
      }), // 7 review.likes - used to determint top reviews
    );
  }
  insertReviews.finalize();

  const insertComments = db.prepare(
    'INSERT INTO comments (comment_date, comment_author_id, comment_replied_to_id, comment_review_id, comment_body, comment_likes) VALUES (?, ?, ?, ?, ?, ?)',
  );
  // generating 2000 comments
  for (c = 1; c < 2001; c++) {
    insertComments.run(
      // id is set to AUTOINCREMENT
      faker.date.between('2018-05-01', '2019-02-20'), // comment.date,
      faker.random.number({
        min: 1,
        max: 500,
      }), // comment.author_id,
      faker.random.number({
        min: 1,
        max: 500,
      }), // comment.replied_to_id,
      faker.random.number({
        min: 1,
        max: 500,
      }), // comment.review_id,
      faker.lorem.sentences(), // comment.body,
      faker.random.number({
        min: 0,
        max: 20,
      }), // comment.likes,
    );
  }
  insertComments.finalize();
});
