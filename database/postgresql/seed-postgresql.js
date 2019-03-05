const connConfig = require('./secret');
const pgp = require('pg-promise')();
const { schema } = require('./postgres-helpers');
// PG POOL instead of client > CLIENT

const db = pgp(connConfig); // connection

// set static column set
const columnSet = pgp.helpers.ColumnSet([
'id',
  'date',
  {name: 'review_star_rating', def: 0},
  {name: 'review_item_rating', def: 0},
  'comments',
  'author_id',
  'author_name',
  'body',
  {name: 'likes', def: 0}
], { table: 'reviews' })

const initialize = (async function() {
  // await client.connect(); // async connection
  await db.any(schema); // create table

  // generate massive amounts of data for bulk insertion
  const q =
    'INSERT INTO reviews(id, date, review_star_rating, review_item_rating, comments, author_id, author_name, body, likes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';

  // insert
  const insertValues = [
    1,
    '2018-3-22',
    5,
    3,
    '[{"username": "vinny"}]',
    5,
    'vincent',
    'asdfasdfasdfasdfasdfasdf',
    22,
  ];

  await db.none(q, insertValues);
  // const result = await db.any('SELECT * FROM reviews');
  // console.log(result);
  await db.end();
})();
