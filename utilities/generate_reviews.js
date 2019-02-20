const faker = require('../../FEC/massdrop-ratings/node_modules/faker/')
const items = require('./items.json')
const users = require('./users.json')
// const reviews = require('./reviews.json')

// var users = []
// var items = []
var reviews = []
// var comments = []
// // generating 10 users
// for (let a = 0; a < 30; a++) {
//     var user = {
//         "id": "",
//         "avatar": "",
//         "username": "",
//         "likesQty": "",
//         "isVerified": "",
//         "isHidden": "",
//         "isDeleted": ""
//     }
//     user.id = faker.random.uuid()
//     user.avatar = faker.image.avatar()
//     user.username = faker.name.lastName()
//     user.likesQty = faker.random.number({
//         'min': 0,
//         'max': 41
//     })
//     user.isVerified = faker.random.number({
//         'min': 0,
//         'max': 1
//     })
//     user.isHidden = 0
//     user.isDeleted = 0
//     users.push(user)
// }
// generating 100 items
// for (let i = 0; i < 100; i++) {
//     var item = {
//         id: "",
//         itemname: ""
//     }
//     item.id = faker.random.uuid()
//     item.itemname = faker.commerce.productName()
//     items.push(item)

// generating reviews for items between 1 and 4 reviews per item
// var randomUserId = Math.floor((Math.random() * users.length) + 1);
// var randomItemId = Math.floor((Math.random() * items.length) + 1);
for (var x = 0; x < 5; x++) {
    var review = {
        id: "",
        date: "",
        author_id: "",
        body: "",
        rating: "",
        item_id: "",
    }
    review.id = faker.random.uuid()
    review.date = faker.date.recent().toString()
    review.author_id = "3d5d04b1-7c7d-4d04-a62d-0970cc559452"
    review.body = faker.lorem.paragraph()
    review.rating = faker.random.number({
        'min': 1,
        'max': 5
    })
    review.item_id = items[Math.floor((Math.random() * 99) + 1)].id
    reviews.push(review)
}
// }
// //generating comments for reviews between 1 and 5 comments
// for (var y = 0; y < 100; y++) {
//     var comment = {
//         id: "",
//         date: "",
//         author_name: "bmorgan05",
//         replied_to_id: "",
//         review_id: "",
//         body: ""
//     }
//     comment.id = faker.random.uuid()
//     comment.date = faker.date.recent().toString()
//     comment.replied_to_id = reviews[Math.floor((Math.random() * 80) + 1)].author_id
//     comment.review_id = reviews[Math.floor((Math.random() * 29) + 1)].id
//     comment.body = faker.lorem.paragraph()
//     comments.push(comment)
// }
// console.log('users...   ', users)
console.log('reviews....   ', reviews)
// console.log('comments....   ', comments)
// console.log('items...   ', items)
