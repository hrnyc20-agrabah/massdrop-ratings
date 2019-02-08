
// To create tables:
// in command line, run 'sqlite3 reviews.db'
// then in sqlite terminal, run '.read massdrop.sql'

const items = require('../../utilities/items.json')
const users = require('../../utilities/users.json')
const reviews = require('../../utilities/reviews.json')
const comments = require('../../utilities/comments.json')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('reviews.db', (error) => {
    if (error) {
        return console.error('Error connecting to DB - DB', error.message);
    }
    console.log('Connected to the SQLite database')
})

// db.serialize(() => {
//     let insertItems = db.prepare("INSERT INTO Items VALUES(?, ?)")
//     items.forEach(item => {
//         insertItems.run(
//             item.id,
//             item.itemname)
//     })
//     insertItems.finalize()

//     let insertUsers = db.prepare("INSERT INTO Users VALUES(?, ?, ?, ?, ?, ?, ?)")
//     users.forEach(user => {
//         insertUsers.run(
//             user.id,
//             user.avatar,
//             user.username,
//             user.likesQty,
//             user.isVerified,
//             user.isHidden,
//             user.isDeleted)
//     })
//     insertUsers.finalize()

//     let insertReviews = db.prepare("INSERT INTO Reviews VALUES(?, ?, ?, ?, ?, ?)")
//     reviews.forEach(review => {
//         insertReviews.run(
//             review.id,
//             review.date,
//             review.author_id,
//             review.body,
//             review.rating,
//             review.item_id)
//     })
//     insertReviews.finalize()

//     let insertComments = db.prepare("INSERT INTO Comments VALUES (?, ?, ?, ?, ?, ?)")
//     comments.forEach(comment => {
//         insertComments.run(
//             comment.id,
//             comment.date,
//             comment.author_name,
//             comment.replied_to_id,
//             comment.review_id,
//             comment.body)
//     })
//     insertComments.finalize()
// })

db.close((error) => {
    if (error) {
        return console.error('Error closing connection to DB - DB', error.message)
    }
    console.log('Closed database connection')
})