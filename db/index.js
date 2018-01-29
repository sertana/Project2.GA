// Setup for pg promise
const pgp = require("pg-promise")();

// configuration object
const cn = {
  host: "localhost",
  // For us, this MUST be 5432
  // It's the port for pgpromise - not the port we're
  // serving our HTTP responses from
  port: 5432,
  database: "news",
  // change this to your user name
  // (type 'whoami' into the terminal if there's any doubt)
  user: "student_19"
};

const db = pgp(cn);

module.exports = db;
