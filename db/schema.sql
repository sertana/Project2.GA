DROP TABLE IF EXISTS news;

CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  url VARCHAR(255)
);

DROP TABLE IF EXISTS users;