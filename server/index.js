const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite = require('../database/index.js');
const utils = require('../../utilities/utilities.js');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

// serving static file
app.get('/items/:itemname', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/items/:itemname/reviews', (req, res) => {
  const itemname = utils.titleize(req.params.itemname);
  const query = `SELECT * FROM reviews JOIN users ON users.user_id = reviews.review_author_id WHERE review_item_id = (SELECT item_id FROM items WHERE item_name="${itemname}") ORDER BY review_date ASC`;

  sqlite.db.all(query, (err, docs) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(`could not get response from DB on itemname ${itemname} - SERVER`, err);
    } else {
      const allReviewsWithComments = [];
      const promises = [];
      docs.forEach((review) => {
        const reviewWithComments = review;
        const selectCreator = [
          'creator.user_id AS creator_id',
          'creator.user_avatar AS creator_avatar ',
          'creator.user_name AS creator_name',
          'creator.user_likesQty AS creator_likesQty',
          'creator.user_isHidden AS creator_isHidden',
          'creator.user_isDeleted AS creator_isDeleted',
        ];
        const selectReplier = [
          'replier.user_id AS replier_id',
          'replier.user_name AS replier_name',
          'replier.user_isHidden AS replier_isHidden',
          'replier.user_isDeleted AS replier_isDeleted',
        ];
        const selectComment = [
          'comments.comment_id',
          'comments.comment_date',
          'comments.comment_author_id',
          'comments.comment_replied_to_id',
          'comments.comment_review_id',
          'comments.comment_body',
        ];
        const commentsQuery = `SELECT ${selectCreator.join(', ')}, ${selectReplier.join(', ')}, ${selectComment.join(', ')} FROM comments JOIN users AS creator ON creator.user_id = comments.comment_author_id JOIN users AS replier ON replier.user_id = comments.comment_replied_to_id WHERE comments.comment_review_id="${review.review_id}" ORDER BY comments.comment_date ASC`;
        // eslint-disable-next-line no-unused-vars
        promises.push(new Promise((resolve, reject) => {
          sqlite.db.all(commentsQuery, (error, response) => {
            if (err) {
              // eslint-disable-next-line no-console
              console.log('error on getting comments (inside Promise)', error);
            } else {
              reviewWithComments.comments = response;
              allReviewsWithComments.push(reviewWithComments);
              resolve();
            }
          });
        }));
      });
      Promise.all(promises)
        .then(() => {
          res.send(allReviewsWithComments);
        });
    }
  });
});


const port = 3008;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening on ${port}`);
});
