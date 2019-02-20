
// To create tables:
// in command line, run 'sqlite3 reviews.db'
// then in sqlite terminal, run '.read massdrop.sql'

const items = require('../utilities/items.json')
const users = require('../utilities/users.json')
const reviews = require('../utilities/reviews.json')
const comments = require('../utilities/comments.json')




const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('reviews.db', (error) => {
  if (error) {
    return console.error('Error connecting to DB - DB', error.message);
  }
  console.log('Connected to the SQLite database Reviews')
})


// db.serialize(() => {
// 	let insertItems = db.prepare("INSERT INTO items VALUES(?, ?)")
// 	items.forEach(item => {
// 		insertItems.run(
// 			item.item_id,
// 			item.item_name)
// 	})
// 	insertItems.finalize()

// 	let insertUsers = db.prepare("INSERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?)")
// 	users.forEach(user => {
// 		insertUsers.run(
// 			user.user_id,
// 			user.user_avatar,
// 			user.user_name,
// 			user.user_likesQty,
// 			user.user_isVerified,
// 			user.user_isHidden,
// 			user.user_isDeleted)
// 	})
// 	insertUsers.finalize()

// 	let insertReviews = db.prepare("INSERT INTO reviews VALUES(?, ?, ?, ?, ?, ?)")
// 	reviews.forEach(review => {
// 		insertReviews.run(
// 			review.review_id,
// 			review.review_date,
// 			review.review_author_id,
// 			review.review_body,
// 			review.review_rating,
// 			review.review_item_id)
// 	})
// 	insertReviews.finalize()

// 	let insertComments = db.prepare("INSERT INTO comments VALUES (?, ?, ?, ?, ?, ?)")
// 	comments.forEach(comment => {
// 		insertComments.run(
// 			comment.comment_id,
// 			comment.comment_date,
// 			comment.comment_author_id,
// 			comment.comment_replied_to_id,
// 			comment.comment_review_id,
// 			comment.comment_body)
// 	})
// 	insertComments.finalize()
// })

// db.close((error) => {
// 	if (error) {
// 		return console.error('Error closing connection to DB - DB', error.message)
// 	}
// 	console.log('Closed database connection')
// })

module.exports = {
  db
}
