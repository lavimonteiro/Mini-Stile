CREATE DATABASE IF NOT EXISTS `mini-stile`;
CREATE TABLE users (
  user_id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`)
);
ALTER TABLE users
ADD CONSTRAINT MIN_USERNAME CHECK (CHAR_LENGTH(username) >= 1);
ALTER TABLE users
ADD CONSTRAINT MIN_EMAIL CHECK (CHAR_LENGTH(email) >= 1);
ALTER TABLE users
ADD CONSTRAINT MIN_PASSWORD CHECK (CHAR_LENGTH(password) >= 10);
CREATE TABLE lessons (
  lesson_id INTEGER NOT NULL AUTO_INCREMENT,
  lesson_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (`lesson_id`)
);
CREATE TABLE card_content(
  lesson_id INTEGER NOT NULL,
  text_content VARCHAR(500) NOT NULL,
  image_id INTEGER NOT NULL
);
CREATE TABLE lesson_content(
  lesson_id INTEGER NOT NULL,
  text_content VARCHAR(500) NOT NULL
);
create table images (
  image_id INTEGER AUTO_INCREMENT NOT NULL,
  image_url VARCHAR (2048) NOT NULL,
  description VARCHAR(255),
  PRIMARY KEY (`image_id`)
);
CREATE TABLE img_content (
  image_id INTEGER NOT NULL,
  lesson_id INTEGER NOT NULL
);
insert into images (image_url, description)
values ("https://tinyurl.com/bdhfvf5w", "whale for card");
insert into lessons (lesson_name)
values ("all about killer whales");
insert into card_content (lesson_id, text_content, image_id)
values (
    1,
    "This lesson is about killer whales. In this lesson you will learn about... what are killer whales? what do killer whales sound like? why are killer whales so cute?",
    1
  );
insert into lesson_content (lesson_id, text_content)
VALUES (
    1,
    "in this lesson you must click to draw on a bow tie onto this very cute killer whale!"
  );
insert into images (image_url, description)
values (
    "https://tinyurl.com/4ah3vu9u",
    "whale for lesson"
  );
insert into images (image_url, description)
values (
    "images/kisspng-bow-tie-scalable-vector-graphics-clip-art-portable-png-bowtie-transparent-amp-png-clipart-free-down-5cdf73f01b3a68.9050611015581480801115.png",
    "bowtie for lesson"
  );
insert into img_content (lesson_id, image_id)
VALUES (1, 2);
insert into img_content (lesson_id, image_id)
VALUES (1, 3);
insert into lessons (lesson_name)
values ("all about cats");
insert into images (image_url, description)
values ("https://tinyurl.com/2zzk245y", "cat for card");
insert into card_content (lesson_id, text_content, image_id)
values (
    2,
    "This lesson is about cats. In this lesson you will learn about... what are cats? what do cats sound like? why are cats so cute?",
    4
  );
insert into lesson_content (lesson_id, text_content)
VALUES (
    2,
    "in this lesson you must click to draw on a mustache onto this very cute cat!"
  );
insert into images (image_url, description)
values (
    "https://tinyurl.com/3f44zb63",
    "cat for lesson"
  );
insert into images (image_url, description)
values (
    "https://tinyurl.com/4wp3mrnu",
    "mustache for lesson"
  );
insert into img_content (lesson_id, image_id)
VALUES (2, 5);
insert into img_content (lesson_id, image_id)
VALUES (2, 6);
