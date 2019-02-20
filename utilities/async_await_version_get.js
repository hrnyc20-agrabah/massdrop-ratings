app.get('/api/items/:itemname/reviews', async (req, res) => {
    let itemname = utils.titleize(req.params.itemname)
    let query = `SELECT * FROM reviews JOIN users ON users.user_id = reviews.review_author_id WHERE review_item_id = (SELECT item_id FROM items WHERE item_name="${itemname}")`

    // var docs = await sqlite.db.all(query)

    // var docs = await sqlite.db.all("SELECT * FROM reviews")
    var docs = await sqlite.db.all("SELECT * FROM reviews")
    // .catch(err => {
    //   console.log('error on first query', err)
    // })
    console.log('docs: ', docs);

    let allReviewsWithComments = []
    let reviewsUsers = docs
    reviewsUsers.forEach(async review => {
        let reviewWithComments = review
        var selectCreator = ["creator.user_id AS creator_creator_id",
            "creator.user_avatar AS creator_avatar ",
            "creator.user_name AS creator_name",
            "creator.user_likesQty AS creator_likesQty",
            "creator.user_isHidden AS creator_isHidden",
            "creator.user_isDeleted AS creator_isDeleted"
        ]
        var selectReplier = ["replier.user_id AS replier_replier_id",
            "replier.user_name AS replier_name",
            "replier.user_isHidden AS replier_isHidden",
            "replier.user_isDeleted AS replier_isDeleted"
        ]
        var selectComment = ["comments.comment_id",
            "comments.comment_date",
            "comments.comment_author_id",
            "comments.comment_replied_to_id",
            "comments.comment_review_id",
            "comments.comment_body"]
        var commentsQuery = `SELECT ${selectCreator.join(', ')}, ${selectReplier.join(', ')}, ${selectComment.join(', ')} FROM comments JOIN users AS creator ON creator.user_id = comments.comment_author_id JOIN users AS replier ON replier.user_id = comments.comment_replied_to_id WHERE comments.comment_review_id="${review.review_id}"`
        let response = await sqlite.db.all(commentsQuery)
        reviewWithComments.comments = response
        // console.log('reviewWithComments: ', reviewWithComments);
        allReviewsWithComments.push(reviewWithComments)
        // console.log('allReviewsWithComments: ', allReviewsWithComments);
    })
    res.send(allReviewsWithComments)
})