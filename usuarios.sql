CREATE DATABASE callejon;

CREATE TABLE users(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  mail VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

INSERT INTO users (name, mail, password) VALUES ('Luciano Camargo', 'luciano@gmail.com', '$2a$12$eGb444dd8Nbop8GmttIzUOPIWaunHcUZA2OYG.oH/F.HxWuoimgZ2');

CREATE TABLE tasks(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  description TEXT NOT NULL,
  priority VARCHAR(100),
  author_id BIGINT REFERENCES users (id)
);

INSERT INTO tasks (description, priority, author_id) VALUES ('Primer usuario', ' usuario callejon', 1);

