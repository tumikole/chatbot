CREATE TABLE usernames(
  	id  BIGSERIAL NOT NULL,
  	username VARCHAR(255),
  	PRIMARY KEY(Id)
);

CREATE TABLE messages(
  	id  BIGSERIAL NOT NULL,
  	message VARCHAR(1000),
  	PRIMARY KEY(Id)
);

CREATE TABLE conversation_look_up(
	id BIGINT NOT NULL,
  	messages_id BIGINT REFERENCES messages(id) ,
  	username_id BIGINT REFERENCES usernames(id) ,
  	PRIMARY KEY(id)
);

INSERT INTO users
("name", email)
VALUES($1, $2);