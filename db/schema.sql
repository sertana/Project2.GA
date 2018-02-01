DROP TABLE IF EXISTS News;

CREATE TABLE News (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  url VARCHAR(255),
  read boolean
);

