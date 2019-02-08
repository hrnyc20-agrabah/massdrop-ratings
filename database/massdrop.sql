BEGIN TRANSACTION;

DROP TABLE IF EXISTS `Items`;
CREATE TABLE `Items` (
	`id`	TEXT NOT NULL,
	`itemname`	TEXT NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users`(
	`id`	TEXT NOT NULL,
	`avatar` TEXT NOT NULL,
	`username`	TEXT(255) NOT NULL,
	`likesQty`	INTEGER,
	`isVerified`	INTEGER(1) NOT NULL,
	`isHidden`	INTEGER(1) NOT NULL,
	`isDeleted`	INTEGER(1) NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `Reviews`;
CREATE TABLE `Reviews` (
	`id`	TEXT NOT NULL,
	`date`	TEXT NOT NULL,
	`author_id`	TEXT(255) NOT NULL,
	`body`	TEXT(3000) NOT NULL,
	`rating`	INTEGER(5) NOT NULL,
	`item_id`	TEXT(255) NOT NULL,
	PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `Comments`;
CREATE TABLE `Comments` (
	`id`	TEXT NOT NULL ,
	`date`	TEXT NOT NULL,
	`author_name`	TEXT NOT NULL,
	`replied_to_id`	TEXT NOT NULL,
	`review_id`	TEXT NOT NULL,
	`body`	TEXT(3000) NOT NULL,
	PRIMARY KEY(`id`)
);

COMMIT;
