BEGIN TRANSACTION;

DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
	`item_id`	TEXT(20) NOT NULL,
	`item_name`	TEXT(300) NOT NULL,
	PRIMARY KEY(`item_id`)
);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
	`user_id`	TEXT(20) NOT NULL,
	`user_avatar` TEXT(100) NOT NULL,
	`user_name`	TEXT(255) NOT NULL,
	`user_likesQty`	INTEGER(10),
	`user_isVerified`	INTEGER(1) NOT NULL,
	`user_isHidden`	INTEGER(1) NOT NULL,
	`user_isDeleted`	INTEGER(1) NOT NULL,
	PRIMARY KEY(`user_id`)
);

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
	`review_id`	TEXT(20) NOT NULL,
	`review_date`	TEXT(100) NOT NULL,
	`review_author_id`	TEXT(255) NOT NULL,
	`review_body`	TEXT(3000) NOT NULL,
	`review_rating`	INTEGER(5) NOT NULL,
	`review_item_id`	TEXT(255) NOT NULL,
	PRIMARY KEY(`review_id`)
);

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
	`comment_id`	TEXT(20) NOT NULL ,
	`comment_date`	TEXT(100) NOT NULL,
	`comment_author_id`	TEXT(100) NOT NULL,
	`comment_replied_to_id`	TEXT(20) NOT NULL,
	`comment_review_id`	TEXT(20) NOT NULL,
	`comment_body`	TEXT(3000) NOT NULL,
	PRIMARY KEY(`comment_id`)
);

COMMIT;
	`review_id`	TEXT(20) NOT NULL,
	`review_date`	TEXT(100) NOT NULL,
	`review_author_id`	TEXT(255) NOT NULL,
	`review_body`	TEXT(3000) NOT NULL,
	`review_rating`	INTEGER(5) NOT NULL,
	`review_item_id`	TEXT(255) NOT NULL,
\


