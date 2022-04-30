const { Pool, Client } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "auth",
  password: "qwe123",
  port: 5432,
});

module.exports = pool;
