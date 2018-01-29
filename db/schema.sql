DROP TABLE IF EXISTS news;

CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  url VARCHAR(255)
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  counter INTEGER -- totally optional, just here to demonstrate that we can have other columns in users
);